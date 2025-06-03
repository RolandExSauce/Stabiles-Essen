package gorilla_kitchen.stabiles_essen.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.List;

//TODO: implement usage in the controllers

//dto for items concerning cooking
public class KitchenDTOs {

    @Data
    @AllArgsConstructor
    public static class CreateRecipeDTO {
        private String name;
        private String description;
        private List<String> ingredients; // could be refined to a DTO later
        private int preparationTimeInMinutes;
        private String instructions;
        private String category;
    };

    @Data
    @AllArgsConstructor
    public static class CreatePantryItemDTO {
        private String name;
        private int quantity;
        private String unit; // e.g., grams, Liters, pieces
        private String expirationDate; // could be LocalDate if parsed
    };

};
