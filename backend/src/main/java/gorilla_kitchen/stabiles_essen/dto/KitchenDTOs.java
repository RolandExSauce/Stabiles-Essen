package gorilla_kitchen.stabiles_essen.dto;
import lombok.AllArgsConstructor;
import lombok.Data;


//dto for items concerning cooking
public class KitchenDTOs {


    @Data
    @AllArgsConstructor
    public static class CreateRecipeDTO {
        //MOHAMMED TODO: add all fields needed to create a recipe

    }

    @Data
    @AllArgsConstructor
    public static class CreatePantryItemDTO {
    //MOHAMMED TODO: add fields that a pantry item will need here
    }


    //FOR NOW WE WILL LIVE THIS, IT'S TO MUCH FOR TWO PEOPLE
//    @Data
//    @AllArgsConstructor
//    public static class ShoppingCartItemDTO {
//
//    }

};
