package gorilla_kitchen.stabiles_essen.dto;
import gorilla_kitchen.stabiles_essen.utils.ItemCategory;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;


//dto for items concerning cooking
public class KitchenDTOs {

    @Schema(description = "DTO for creating a recipe")
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class CreateRecipeDTO {

        @Schema(description = "Name of the recipe", example = "Apple Tart")
        private String name;

        @Schema(description = "Description of the recipe", example = "A classic apple tart with a frangipane filling.")
        private String description;

        @Schema(description = "Preparation time in minutes", example = "45")
        private int cookingTime;

        @Schema(description = "Calories per serving", example = "320")
        private int calories;

        @Schema(description = "List of ingredients")
        private List<IngredientDTO> ingredients; // now refined to match model

        @Schema(description = "Cooking instructions", example = "Preheat oven to 180C. Mix ingredients...")
        private String instructions;

        @Schema(description = "Recipe category", example = "DESSERT")
        private ItemCategory category;

        @Schema(description = "URL to the recipe image", example = "https://example.com/image.jpg")
        private String imageUrl;

        @Schema(description = "User ID of the recipe owner", example = "user12345")
        private String userId;
    };

    // add field category e.g. BAKING, OILS etc.
    @Schema(description = "DTO for creating a pantry item")
    @Data
    @AllArgsConstructor
    public static class CreatePantryItemDTO {

        @Schema(description = "Name of the pantry item", example = "Olive Oil")
        private String name;

        @Schema(description = "Quantity available", example = "500")
        private double quantity;

        @Schema(description = "Unit of measurement", example = "ml") // e.g., grams, Liters, pieces
        private String unit;

        @Schema(description = "Category of the pantry item", example = "OILS")
        private ItemCategory itemCategory;

        @Schema(description = "Expiration date in YYYY-MM-DD format", example = "2025-12-31")
        private LocalDate expirationDate;

        private String userId;
    };

    @Schema(description = "DTO for an ingredient within a recipe")
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class IngredientDTO {

        @Schema(description = "Name of the ingredient", example = "Flour")
        private String name;

        @Schema(description = "Amount of the ingredient", example = "200")
        private double amount;

        @Schema(description = "Unit of the ingredient", example = "grams")
        private String unit;
    };
};
