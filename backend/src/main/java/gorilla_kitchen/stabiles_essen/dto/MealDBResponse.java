package gorilla_kitchen.stabiles_essen.dto;
import lombok.Data;
import java.util.List;
import java.util.Map;

@Data
public class MealDBResponse {
    private List<Map<String, Object>> meals;
};

