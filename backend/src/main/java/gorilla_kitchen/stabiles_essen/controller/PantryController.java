package gorilla_kitchen.stabiles_essen.controller;
import gorilla_kitchen.stabiles_essen.dto.KitchenDTOs.CreatePantryItemDTO;
import gorilla_kitchen.stabiles_essen.model.PantryItemDoc;
import gorilla_kitchen.stabiles_essen.service.AuthService;
import gorilla_kitchen.stabiles_essen.service.PantryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/silverback/pantry")
public class PantryController {

    private final PantryService pantryService;
    private final AuthService authService;

    public PantryController(PantryService pantryService, AuthService authService) {
        this.pantryService = pantryService;
        this.authService = authService;
    }

    @PostMapping("/add")
    public ResponseEntity<PantryItemDoc> addPantryItem(
            @RequestBody CreatePantryItemDTO itemDTO,
            Principal principal
    ) {
        String userId = authService.getUserIdFromPrincipal(principal);
        itemDTO.setUserId(userId);
        return ResponseEntity.ok(pantryService.createAndSavePantryItem(itemDTO));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deletePantryItem(
            @PathVariable String id,
            Principal principal
    ) {
        String userId = authService.getUserIdFromPrincipal(principal);
        boolean deleted = pantryService.deletePantryItem(id, userId);
        return deleted ?
                ResponseEntity.ok("Pantry item deleted successfully") :
                ResponseEntity.notFound().build();
    }

    @GetMapping("/items/user")
    public ResponseEntity<List<PantryItemDoc>> getAllPantryItems(Principal principal) {
        String userId = authService.getUserIdFromPrincipal(principal);
        return ResponseEntity.ok(pantryService.getPantryItemsByUserId(userId));
    }
}