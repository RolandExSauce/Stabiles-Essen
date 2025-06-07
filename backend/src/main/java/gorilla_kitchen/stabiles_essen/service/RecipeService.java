package gorilla_kitchen.stabiles_essen.service;
import gorilla_kitchen.stabiles_essen.model.RecipeModel;
import gorilla_kitchen.stabiles_essen.repo.RecipeRepository;
import org.springframework.stereotype.Service;
import java.util.Optional;



@Service
public class RecipeService {

    private final RecipeRepository recipeRepository;

    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    };

    public RecipeModel addRecipe(RecipeModel recipe) {
        return recipeRepository.save(recipe);
    };

    public boolean deleteRecipe(String recipeId) {
        Optional<RecipeModel> recipe = recipeRepository.findById(recipeId);
        if (recipe.isPresent()) {
            recipeRepository.deleteById(recipeId);
            return true;
        }
        return false;
    };

    public Optional<RecipeModel> updateRecipe(String recipeId, RecipeModel updatedRecipe) {
        return recipeRepository.findById(recipeId).map(existingRecipe -> {
            updatedRecipe.setId(recipeId); // preserve the original ID
            return recipeRepository.save(updatedRecipe);
        });
    };
}
