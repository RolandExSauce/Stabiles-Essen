package gorilla_kitchen.stabiles_essen.model;
import gorilla_kitchen.stabiles_essen.utils.ItemCategory;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;
import lombok.*;


//Define a recipe document, this Recipe Model refers To OUR RECIPES, so the
//private ones, the others will come via API requests from theMealDB
@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "recipes")
public class RecipeDoc {
    @Id
    private String id;
    private String name;
    private String description;
    private int cookingTime;
    private int calories;
    private List<Ingredient> ingredients;
    private String instructions;
    private ItemCategory itemCategory;

    private String imageUrl;
    private String userId; // id of the user who created this recipe

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Ingredient {
        private String name;
        private double amount;
        private String unit;
    };
};
