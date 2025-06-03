package gorilla_kitchen.stabiles_essen.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

//dto for items concerning cooking
public class KitchenDTOs {

    @Data
    @AllArgsConstructor
    public static class CreateRecipeDTO {
        //MOHAMMED TODO: add all fields needed to create a recipe
        private String name;
        private String description;
        private List<String> ingredients; // could be refined to a DTO later
        private int preparationTimeInMinutes;
        private String instructions;
        private String category;
    }

    @Data
    @AllArgsConstructor
    public static class CreatePantryItemDTO {
    //MOHAMMED TODO: add fields that a pantry item will need here
        private String name;
        private int quantity;
        private String unit; // e.g., grams, Liters, pieces
        private String expirationDate; // could be LocalDate if parsed
    }

    //FOR NOW WE WILL LIVE THIS, IT'S TO MUCH FOR TWO PEOPLE
//    @Data
//    @AllArgsConstructor
//    public static class ShoppingCartItemDTO {
//
//    }

};
