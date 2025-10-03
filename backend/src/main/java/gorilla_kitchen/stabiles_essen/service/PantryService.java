package gorilla_kitchen.stabiles_essen.service;
import gorilla_kitchen.stabiles_essen.dto.KitchenDTOs.CreatePantryItemDTO;
import gorilla_kitchen.stabiles_essen.model.PantryItemDoc;
import gorilla_kitchen.stabiles_essen.repo.PantryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PantryService {
    private final PantryRepository pantryRepository;

    @Transactional
    public PantryItemDoc createAndSavePantryItem(CreatePantryItemDTO dto) {
        System.out.println("dto = " + dto);
        PantryItemDoc item = PantryItemDoc.builder()
                .ingredientName(dto.getName())
                .quantity(dto.getQuantity())
                .unit(dto.getUnit())
                .itemCategory(dto.getItemCategory())
                .expirationDate(dto.getExpirationDate())
                .userId(dto.getUserId())
                .build();
        return pantryRepository.save(item);
    }

    @Transactional
    public boolean deletePantryItem(String itemId, String userId) {
        Optional<PantryItemDoc> itemOpt = pantryRepository.findByIdAndUserId(itemId, userId);
        if (itemOpt.isPresent()) {
            pantryRepository.delete(itemOpt.get());
            return true;
        }
        return false;
    }


    public List<PantryItemDoc> getPantryItemsByUserId(String userId) {
        return pantryRepository.findByUserId(userId);
    }
}