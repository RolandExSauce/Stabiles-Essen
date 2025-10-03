package gorilla_kitchen.stabiles_essen.repo;
import gorilla_kitchen.stabiles_essen.model.RecipeDoc;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface RecipeRepository extends MongoRepository<RecipeDoc, String> {
    List<RecipeDoc> findByUserId(String userId); // Finds all recipes created by a specific user
};
