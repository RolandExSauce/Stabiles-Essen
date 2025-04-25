package gorilla_kitchen.stabiles_essen.service;
import gorilla_kitchen.stabiles_essen.dto.AuthDTOs;
import gorilla_kitchen.stabiles_essen.model.UserModel;
import gorilla_kitchen.stabiles_essen.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final ServiceHelper serviceHelper;

    //authenticate the user
    public AuthDTOs.AuthResponse authenticateUser(AuthDTOs.LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(

                //Will this work or do I need to create a custom authentication token ?
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        UserModel user = userRepository.findByUsername(userDetails.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));
        return serviceHelper.buildAuthResponse(user);
    };

    //service method to register user
    public AuthDTOs.AuthResponse registerUser(AuthDTOs.RegisterRequest registerRequest) {
        //pass to user service createUser method
        UserModel newUser = serviceHelper.createUser(
                registerRequest.getUsername(),
                registerRequest.getEmail(),
                registerRequest.getPassword()
        );
        return serviceHelper.buildAuthResponse(newUser);
    };
};