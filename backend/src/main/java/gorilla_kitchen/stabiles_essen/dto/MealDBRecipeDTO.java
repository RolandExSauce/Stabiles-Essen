package gorilla_kitchen.stabiles_essen.dto;
import lombok.Data;
import java.util.List;


@Data
public class MealDBRecipeDTO {
    private String id;
    private String name;
    private String category;
    private String area;
    private String instructions;
    private String imageUrl;
    private String tags;
    private String youtubeUrl;

    // Combine ingredients and measures together
    private List<IngredientEntry> ingredients;

    @Data
    public static class IngredientEntry {
        private String ingredient;
        private String measure;
    };
};
