package gorilla_kitchen.stabiles_essen.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

     /*
  MOHAMMED TODO: don't change the existing code, what you should do:
  add existing fields on user to reference pantry and recipe, e.g. through lists
  so for example:

WICHTIG: REFERENCES ! => similar to foreign key in SQL
  List<PantryItemModel> pantryList ....
  List<RecipeMovel> recipeList...
 or even better using MAP 🤔?
     */

@Data
@Document
public class UserModel {
    @Id
    private String id;
    private String username;
    private String email;
    private String password; //Will store encoded password

    //reference to pantry and recipes by id
    private List<String> pantryItemIds; // References to PantryItemModel documents
    private List<String> recipeIds; // References to RecipeModel documents

    //constructor with only username and email
    public UserModel(String username, String email) {
        this.username = username;
        this.email = email;
    };

    //encrypts password before setting
    public void encodePassword(String rawPassword, PasswordEncoder encoder) {
       this.password = encoder.encode(rawPassword);
    };
};
