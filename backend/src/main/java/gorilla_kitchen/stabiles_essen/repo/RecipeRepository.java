package gorilla_kitchen.stabiles_essen.repo;

/*
  MOHAMMED TODO: ADD methods/query methods for RecipeRepository here to ADD and
  DELETE a Recipe from the recipes List of the  user
 */

import gorilla_kitchen.stabiles_essen.model.RecipeModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository interface for managing RecipeModel documents in MOngoDB.
 *
 * Note: Adding or removing recipes from a user's recipe list should be handled
 * in the UserRepository or UserService, since the relationship is stored in UserModel.
 */
@Repository
public interface RecipeRepository extends MongoRepository<RecipeModel, String> {

    // Basic CRUD methods like save(), findById(), deleteById() are inherited from MongoRepository.

};
