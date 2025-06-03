package gorilla_kitchen.stabiles_essen.service;

import gorilla_kitchen.stabiles_essen.model.PantryItemModel;
import gorilla_kitchen.stabiles_essen.repo.PantryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

/*
  MOHAMMED TODO: Use methods/query methods from PantryRepository here to ADD and
  DELETE a PantryItem (FOR NOW UPDATE PANTRYITEM is okay, we leave it like this)
 */
@Service
public class PantryService {

    private final PantryRepository pantryRepository;

    @Autowired
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
};
