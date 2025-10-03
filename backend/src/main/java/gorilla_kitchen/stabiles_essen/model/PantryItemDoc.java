package gorilla_kitchen.stabiles_essen.model;
import gorilla_kitchen.stabiles_essen.utils.ItemCategory;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDate;
import lombok.*;

//Define a PantryItem document
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "pantry_items")
public class PantryItemDoc {
    @Id
    private String id;
    private String ingredientName;
    private double quantity;
    private String unit;
    private ItemCategory itemCategory;
    private LocalDate expirationDate;
    private String userId;
}
