package gorilla_kitchen.stabiles_essen.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import java.util.List;

//Define a recipe document, this Recipe Model refers To OUR RECIPES, so the
//private ones, the others will come via API requests from theMealDB
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RecipeModel {
    @Id
    private String id;
    private String name;
    private int durationInMinutes;
    private int rating;
    private List<Ingredient> ingredients;
    private String instructions;
    private String category;
    private String imageUrl;
    private String userId; // ID of the user who created this recipe

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Ingredient {
        private String name;
        private double amount;
        private String unit;
    }
}
