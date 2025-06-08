package gorilla_kitchen.stabiles_essen.service;

import gorilla_kitchen.stabiles_essen.model.PantryItemModel;
import gorilla_kitchen.stabiles_essen.repo.PantryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;



@Service
public class PantryService {

    private final PantryRepository pantryRepository;

    public PantryService(PantryRepository pantryRepository) {
        this.pantryRepository = pantryRepository;
    }

    public PantryItemModel addPantryItem(PantryItemModel item) {
        return pantryRepository.save(item);
    }

    public boolean deletePantryItem(String itemId) {
        Optional<PantryItemModel> item = pantryRepository.findById(itemId);
        if (item.isPresent()) {
            pantryRepository.deleteById(itemId);
            return true;
        }
        return false;
    }

    public List<PantryItemMOdel> getAllPantryItems() {
        return pantryRepository.findAll();
    } // Returns all pantry items from the database
}
