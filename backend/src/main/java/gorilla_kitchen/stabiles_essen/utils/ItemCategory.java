package gorilla_kitchen.stabiles_essen.utils;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum ItemCategory {
    BREAKFAST("Breakfast"),
    BAKING("Baking"),
    LUNCH("Lunch"),
    DINNER("Dinner"),
    DESSERT("Dessert"),
    SNACK("Snack"),
    OILS("Oils"); // Add this new category

    private final String label;

    ItemCategory(String label) {
        this.label = label;
    }

    // For serialization (enum -> JSON)
    @JsonValue
    public String getLabel() {
        return label;
    }

    // For deserialization (JSON -> enum)
    @JsonCreator
    public static ItemCategory fromLabel(String label) {
        for (ItemCategory category : values()) {
            if (category.label.equalsIgnoreCase(label)) {
                return category;
            }
        }
        throw new IllegalArgumentException("Unknown category: " + label);
    }

    @Override
    public String toString() {
        return label;
    };
};