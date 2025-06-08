package gorilla_kitchen.stabiles_essen.dto;

import lombok.Data;

@Data
public class ExternalRecipeDTO {
    private String name;
    private String category;
    private String instructions;
    private String imageUrl;
}
