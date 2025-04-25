package gorilla_kitchen.stabiles_essen.repo;
import gorilla_kitchen.stabiles_essen.model.UserModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;


//user repo
public interface UserRepository extends MongoRepository<UserModel, String> {
    Optional<UserModel> findByUsername(String username);
    Optional<UserModel> findByEmail(String email);

    boolean existsByUsername(String username);
};