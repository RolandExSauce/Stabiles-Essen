package gorilla_kitchen.stabiles_essen.controller;
import gorilla_kitchen.stabiles_essen.model.PantryItemModel;
import gorilla_kitchen.stabiles_essen.service.PantryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


/*
TODO: missing get all pantry items
TODO: Test with Postman
*/
@RestController
@RequestMapping("/api/pantry")
public class PantryController {

    private final PantryService pantryService;

    @Autowired
    public PantryController(PantryService pantryService) {
        this.pantryService = pantryService;
    }

    @PostMapping("/add")
    public ResponseEntity<PantryItemModel> addPantryItem(@RequestBody PantryItemModel item) {
        PantryItemModel savedItem = pantryService.addPantryItem(item);
        return ResponseEntity.ok(savedItem);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deletePantryItem(@PathVariable String id) {
        boolean deleted = pantryService.deletePantryItem(id);
        if (deleted) {
            return ResponseEntity.ok("Pantry item deleted successfully.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
