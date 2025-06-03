package gorilla_kitchen.stabiles_essen.controller;

import gorilla_kitchen.stabiles_essen.model.RecipeModel;
import gorilla_kitchen.stabiles_essen.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

/*
  MOHAMMED TODO: Use methods/query methods from RecipeService here to make
            the requests
*/
@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    private final RecipeService recipeService;

    @Autowired
    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @PostMapping("/add")
    public ResponseEntity<RecipeModel> addRecipe(@RequestBody RecipeModel recipe) {
        RecipeModel savedRecipe = recipeService.addRecipe(recipe);
        return ResponseEntity.ok(savedRecipe);
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
}
