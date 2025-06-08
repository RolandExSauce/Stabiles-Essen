package gorilla_kitchen.stabiles_essen.controller;

import gorilla_kitchen.stabiles_essen.model.RecipeModel;
import gorilla_kitchen.stabiles_essen.service.RecipeService;
import gorilla_kitchen.stabiles_essen.dto.ExternalRecipeDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

//TODO: missing get users recipes
//fetch some recipes from backend using MealDB API just to fill frontend section
//use REST Template and just fetch from this endpoint: www.themealdb.com/api/json/v1/1/search.php?f=a
//TODO: use the Kitchen DTOs instead of the models
//TODO: Test with Postman (Token from login has to be in Authorization Header)


@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    private final RecipeService recipeService;

    @Autowired
    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @PostMapping("/add")
    public ResponseEntity<RecipeModel> addRecipe(@RequestBody CreateRecipeDTO dto) {
        RecipeModel recipe = new RecipeModel();
        recipe.setName(dto.getName());
        recipe.setDescription(dto.getDescription());
        recipe.setCategory(dto.getCategory());
        recipe.setDurationInMinutes(dto.getPreparationTimeInMinutes());
        recipe.setInstructions(dto.getInstructions());
        recipe.setIngredients(dto.getIngredients().stream().map(ingredientName -> {
            RecipeModel.Ingredient ingredient = new RecipeModel.Ingredient();
            ingredient.setName(ingredientName);
            ingredient.setAmount(0);
            ingredient.setUnit("");
            return ingredient;
        }).toList());
        recipe.setImageUrl("");
        recipe.setRating(0);
        return ResponseEntity.ok(recipeService.addRecipe(recipe));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteRecipe(@PathVariable String id) {
        boolean deleted = recipeService.deleteRecipe(id);
        if (deleted) {
            return ResponseEntity.ok("Recipe deleted successfully.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<RecipeModel> updateRecipe(@PathVariable String id, @RequestBody RecipeModel updatedRecipe) {
        Optional<RecipeModel> result = recipeService.updateRecipe(id, updatedRecipe);
        return result.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/user")
    public ResponseEntity<?> getUserRecipes(@RequestParam String userId) {
        return ResponseEntity.ok(recipeService.getRecipesByUserId(userId));
    } // Added endpoint to get recipes for a specific user

    @GetMapping("/external")
    public ResponseEntity<List<ExternalRecipeDTO>> getExternalRecipes() {
        return ResponseEntity.ok(recipeService.fetchExternalRecipes());
    } // Fetches recipes from theMealDB and maps them to simplified DTOs
}
