package gorilla_kitchen.stabiles_essen.repo;

import gorilla_kitchen.stabiles_essen.model.RecipeModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Repository interface for managing RecipeModel documents in MOngoDB.
 *
 * Note: Adding or removing recipes from a user's recipe list should be handled
 * in the UserRepository or UserService, since the relationship is stored in UserModel.
 */
@Repository
public interface RecipeRepository extends MongoRepository<RecipeModel, String> {

    // Basic CRUD methods like save(), findById(), deleteById() are inherited from MongoRepository.

    List<RecipeModel> findByUserId(String userId); // Finds all recipes created by a specific user
}
