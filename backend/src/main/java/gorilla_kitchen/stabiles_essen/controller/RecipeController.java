package gorilla_kitchen.stabiles_essen.controller;
import gorilla_kitchen.stabiles_essen.dto.KitchenDTOs;
import gorilla_kitchen.stabiles_essen.dto.MealDBRecipeDTO;
import gorilla_kitchen.stabiles_essen.model.RecipeDoc;
import gorilla_kitchen.stabiles_essen.service.AuthService;
import gorilla_kitchen.stabiles_essen.service.RecipeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;
import java.util.List;


@RestController
@RequestMapping("/silverback/recipes")
public class RecipeController {

    private final RecipeService recipeService;
    private final AuthService authService;

    public RecipeController(RecipeService recipeService, AuthService authService) {
        this.recipeService = recipeService;
        this.authService = authService;
    }

    @PostMapping("/add")
    public ResponseEntity<RecipeDoc> addRecipe(
            @RequestBody KitchenDTOs.CreateRecipeDTO dto,
            Principal principal
    ) {
        String userId = authService.getUserIdFromPrincipal(principal);
        dto.setUserId(userId);
        return ResponseEntity.ok(recipeService.createAndSaveRecipe(dto));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteRecipe(
            @PathVariable String id,
            Principal principal
    ) {
        String userId = authService.getUserIdFromPrincipal(principal);
        boolean deleted = recipeService.deleteRecipe(id, userId);
        return deleted ?
                ResponseEntity.ok("Recipe deleted successfully") :
                ResponseEntity.notFound().build();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<RecipeDoc> updateRecipe(
            @PathVariable String id,
            @RequestBody RecipeDoc updatedRecipeDoc,
            Principal principal
    ) {
        String userId = authService.getUserIdFromPrincipal(principal);
        return recipeService.updateRecipe(id, updatedRecipeDoc, userId)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/user")
    public ResponseEntity<List<RecipeDoc>> getUserRecipes(Principal principal) {
        String userId = authService.getUserIdFromPrincipal(principal);
        return ResponseEntity.ok(recipeService.getRecipesByUserId(userId));
    }

    @GetMapping("/external")
    public ResponseEntity<List<MealDBRecipeDTO>> getExternalRecipes() {
        return ResponseEntity.ok(recipeService.fetchExternalRecipes());
    }
}