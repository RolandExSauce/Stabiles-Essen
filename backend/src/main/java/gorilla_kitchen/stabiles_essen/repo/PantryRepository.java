package gorilla_kitchen.stabiles_essen.repo;
import gorilla_kitchen.stabiles_essen.model.PantryItemDoc;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;
import java.util.Optional;

public interface PantryRepository extends MongoRepository<PantryItemDoc, String> {
    List<PantryItemDoc> findByUserId(String userId);
    Optional<PantryItemDoc> findByIdAndUserId(String itemId, String userId);
}