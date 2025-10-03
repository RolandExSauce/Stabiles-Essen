package gorilla_kitchen.stabiles_essen.service;
import gorilla_kitchen.stabiles_essen.config.JwtUtil;
import gorilla_kitchen.stabiles_essen.dto.AuthDTOs;
import gorilla_kitchen.stabiles_essen.model.UserDoc;
import gorilla_kitchen.stabiles_essen.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.dao.DuplicateKeyException;


//helper service class
@Service
@RequiredArgsConstructor
public class ServiceHelper {

    private final JwtUtil jwtUtils;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    //create the user
    public UserDoc createUser(String username, String email, String rawPassword) {
        validateUniqueUser(username, email);
        UserDoc user = new UserDoc(username, email);
        user.encodePassword(rawPassword, passwordEncoder);
        return userRepository.save(user);
    };

    //validate if user exist or email is taken
    private void validateUniqueUser(String username, String email) {
        if (userRepository.existsByUsername(username)) {
            throw new DuplicateKeyException("Username taken");
        }
        if (userRepository.findByEmail(email).isPresent()) {
            throw new DuplicateKeyException("Email taken");
        }
    };

    //construct response using dto
    public AuthDTOs.AuthResponse buildAuthResponse(UserDoc user) {
        //send user auth response back with token
        return new AuthDTOs.AuthResponse(
                jwtUtils.generateToken(user.getUsername()),
                user.getUsername(),
                user.getEmail()
        );
    };
};