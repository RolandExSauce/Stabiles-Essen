package gorilla_kitchen.stabiles_essen.repo;
import gorilla_kitchen.stabiles_essen.model.UserDoc;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;


//user repo
public interface UserRepository extends MongoRepository<UserDoc, String> {
    Optional<UserDoc> findByUsername(String username);
    Optional<UserDoc> findByEmail(String email);
    boolean existsByUsername(String username);
};