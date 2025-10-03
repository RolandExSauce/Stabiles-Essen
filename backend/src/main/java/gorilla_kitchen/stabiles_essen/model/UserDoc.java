package gorilla_kitchen.stabiles_essen.model;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.data.annotation.Id;
import java.util.ArrayList;
import java.util.List;
import lombok.Data;


@Data
@Document(collection = "users")
public class UserDoc {
    @Id
    private String id;
    private String username;
    private String email;
    private String password; //will store encoded password

    //reference to pantry and recipes by id
    private List<String> pantryItemIds; // References to PantryItemModel documents
    private List<String> recipeIds = new ArrayList<>(); // References to RecipeModel documents

    //constructor with only username and email
    public UserDoc(String username, String email) {
        this.username = username;
        this.email = email;
    };

    //encrypts password before setting
    public void encodePassword(String rawPassword, PasswordEncoder encoder) {
       this.password = encoder.encode(rawPassword);
    };
};
