package gorilla_kitchen.stabiles_essen.service;

import gorilla_kitchen.stabiles_essen.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public void addRecipeToUser(String userId, String recipeId) {
        userRepository.findById(userId).ifPresent(user -> {
            if (!user.getRecipeIds().contains(recipeId)) {
                user.getRecipeIds().add(recipeId);
                userRepository.save(user);
            }
        });
    };

    public void removeRecipeFromUser(String userId, String recipeId) {
        userRepository.findById(userId).ifPresent(user -> {
            user.getRecipeIds().remove(recipeId);
            userRepository.save(user);
        });
    };





    // Similar methods for pantry items
}
