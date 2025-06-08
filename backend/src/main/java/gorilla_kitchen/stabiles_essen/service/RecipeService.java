package gorilla_kitchen.stabiles_essen.service;

import gorilla_kitchen.stabiles_essen.model.RecipeModel;
import gorilla_kitchen.stabiles_essen.repo.RecipeRepository;
import gorilla_kitchen.stabiles_essen.dto.ExternalRecipeDTO;

import org.springframework.stereotype.Service;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Map;
import java.util.List;
import java.util.Optional;

@Service
public class RecipeService {

    private final RecipeRepository recipeRepository;

    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    public RecipeModel addRecipe(RecipeModel recipe) {
        return recipeRepository.save(recipe);
    }

    public boolean deleteRecipe(String recipeId) {
        Optional<RecipeModel> recipe = recipeRepository.findById(recipeId);
        if (recipe.isPresent()) {
            recipeRepository.deleteById(recipeId);
            return true;
        }
        return false;
    }

    public Optional<RecipeModel> updateRecipe(String recipeId, RecipeModel updatedRecipe) {
        return recipeRepository.findById(recipeId).map(existingRecipe -> {
            updatedRecipe.setId(recipeId); // preserve the original ID
            return recipeRepository.save(updatedRecipe);
        });
    }

    public List<RecipeModel> getRecipesByUserId(String userId) {
        return recipeRepository.findByUserId(userId);
    } // Retrieves all recipes created by a specific user

    public List<ExternalRecipeDTO> fetchExternalRecipes() {
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

        ResponseEntity<Map> response = restTemplate.getForEntity(url, Map.class);
        List<Map<String, Object>> meals = (List<Map<String, Object>>) response.getBody().get("meals");

        List<ExternalRecipeDTO> result = new ArrayList<>();
        if (meals != null) {
            for (Map<String, Object> meal : meals) {
                ExternalRecipeDTO dto = new ExternalRecipeDTO();
                dto.setName((String) meal.get("strMeal"));
                dto.setCategory((String) meal.get("strCategory"));
                dto.setInstructions((String) meal.get("strInstructions"));
                dto.setImageUrl((String) meal.get("strMealThumb"));
                result.add(dto);
            }
        }
        return result;
    }
}
