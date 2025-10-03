package gorilla_kitchen.stabiles_essen.service;
import gorilla_kitchen.stabiles_essen.dto.KitchenDTOs;
import gorilla_kitchen.stabiles_essen.dto.MealDBResponse;
import gorilla_kitchen.stabiles_essen.dto.MealDBRecipeDTO;
import gorilla_kitchen.stabiles_essen.model.RecipeDoc;
import gorilla_kitchen.stabiles_essen.model.UserDoc;
import gorilla_kitchen.stabiles_essen.repo.RecipeRepository;
import gorilla_kitchen.stabiles_essen.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;
import java.util.*;


@Service
@RequiredArgsConstructor
public class RecipeService {

    private final RecipeRepository recipeRepository;
    private final UserRepository userRepository;


    // Creates a RecipeDoc from a DTO and saves it to the repository
    @Transactional
    public RecipeDoc createAndSaveRecipe(KitchenDTOs.CreateRecipeDTO dto) {
        // First verify user exists
        UserDoc user = userRepository.findById(dto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        RecipeDoc recipeDoc = new RecipeDoc();
        recipeDoc.setName(dto.getName());
        recipeDoc.setDescription(dto.getDescription());
        recipeDoc.setCookingTime(dto.getCookingTime());
        recipeDoc.setCalories(dto.getCalories());
        recipeDoc.setInstructions(dto.getInstructions());
        recipeDoc.setImageUrl(dto.getImageUrl());
        recipeDoc.setUserId(dto.getUserId());
        recipeDoc.setItemCategory(dto.getCategory());

        // Convert ingredients
        recipeDoc.setIngredients(dto.getIngredients().stream().map(ingredientDTO -> {
            RecipeDoc.Ingredient ingredient = new RecipeDoc.Ingredient();
            ingredient.setName(ingredientDTO.getName());
            ingredient.setAmount(ingredientDTO.getAmount());
            ingredient.setUnit(ingredientDTO.getUnit());
            return ingredient;
        }).toList());

        // Save recipe
        RecipeDoc savedRecipe = recipeRepository.save(recipeDoc);


        if (user.getRecipeIds() == null) {
            user.setRecipeIds(new ArrayList<>());
        }

        // Add to user's recipes
        user.getRecipeIds().add(savedRecipe.getId());
        userRepository.save(user);
        return savedRecipe;
    }

    @Transactional
    public boolean deleteRecipe(String recipeId, String userId) {
        // Verify recipe exists and belongs to user
        RecipeDoc recipe = recipeRepository.findById(recipeId)
                .orElseThrow(() -> new IllegalArgumentException("Recipe not found"));

        if (!recipe.getUserId().equals(userId)) {
            throw new SecurityException("User not authorized to delete this recipe");
        }

        // Remove from user's recipe list
        userRepository.findById(userId).ifPresent(user -> {
            user.getRecipeIds().remove(recipeId);
            userRepository.save(user);
        });

        // Delete recipe
        recipeRepository.deleteById(recipeId);
        return true;
    }

    @Transactional
    public Optional<RecipeDoc> updateRecipe(String recipeId, RecipeDoc updatedRecipeDoc, String userId) {
        return recipeRepository.findById(recipeId)
                .filter(recipe -> recipe.getUserId().equals(userId))
                .map(existingRecipe -> {
                    // Preserve immutable fields
                    updatedRecipeDoc.setId(recipeId);
                    updatedRecipeDoc.setUserId(userId);
                    return recipeRepository.save(updatedRecipeDoc);
                });
    };

    public List<RecipeDoc> getRecipesByUserId(String userId) {
        return recipeRepository.findByUserId(userId);
    };

    public Optional<RecipeDoc> getRecipeByIdAndUser(String recipeId, String userId) {
        return recipeRepository.findById(recipeId)
                .filter(recipe -> recipe.getUserId().equals(userId));
    };

    public List<MealDBRecipeDTO> fetchExternalRecipes() {
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

        ResponseEntity<MealDBResponse> response = restTemplate.getForEntity(url, MealDBResponse.class);
        List<Map<String, Object>> meals = Objects.requireNonNull(response.getBody()).getMeals();

        List<MealDBRecipeDTO> result = new ArrayList<>();
        if (meals != null) {
            for (Map<String, Object> meal : meals) {
                MealDBRecipeDTO dto = new MealDBRecipeDTO();
                dto.setId((String) meal.get("idMeal"));
                dto.setName((String) meal.get("strMeal"));
                dto.setCategory((String) meal.get("strCategory"));
                dto.setArea((String) meal.get("strArea"));
                dto.setInstructions((String) meal.get("strInstructions"));
                dto.setImageUrl((String) meal.get("strMealThumb"));
                dto.setTags((String) meal.get("strTags"));
                dto.setYoutubeUrl((String) meal.get("strYoutube"));

                // Build ingredients list (up to 20)
                List<MealDBRecipeDTO.IngredientEntry> ingredients = new ArrayList<>();
                for (int i = 1; i <= 20; i++) {
                    String ingredient = (String) meal.get("strIngredient" + i);
                    String measure = (String) meal.get("strMeasure" + i);
                    if (ingredient != null && !ingredient.isBlank()) {
                        MealDBRecipeDTO.IngredientEntry entry = new MealDBRecipeDTO.IngredientEntry();
                        entry.setIngredient(ingredient);
                        entry.setMeasure(measure != null ? measure : "");
                        ingredients.add(entry);
                    }
                };
                dto.setIngredients(ingredients);
                result.add(dto);
            };
        };
        return result;
    };
};
