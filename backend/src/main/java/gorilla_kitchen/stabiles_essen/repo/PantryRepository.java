package gorilla_kitchen.stabiles_essen.repo;
import gorilla_kitchen.stabiles_essen.model.PantryItemModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository interface for managing PantryItemModel documents in MongoDB.
 *
 * Note: Adding or removing pantry items from a user's pantry list should be handled
 * in the UserRepository or PantryService, since the relationship is stored in UserModel.
 */
@Repository
public interface PantryRepository extends MongoRepository<PantryItemModel, String> {

    // Basic CRUD methods like save(), findById(), deleteById() are inherited from MongoRepository.

};
