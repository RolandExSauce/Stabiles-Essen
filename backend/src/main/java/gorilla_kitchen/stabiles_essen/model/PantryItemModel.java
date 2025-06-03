package gorilla_kitchen.stabiles_essen.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

//Define a PantryItem document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PantryItemModel {

        /*
    TODO: add fields for a recipe document based on the screenshot inside this folder:
    src/main/java/ressources/static/add_pantry_fields.png
     */

    private String ingredientName;
    private double quantity;
    private String unit; // e.g., g, ml, pcs
    private String other; // dropdown selection, could be category or tag
    private LocalDate expirationDate;
}
