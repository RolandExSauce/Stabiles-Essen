package gorilla_kitchen.stabiles_essen.service;
import gorilla_kitchen.stabiles_essen.dto.AuthDTOs;
import gorilla_kitchen.stabiles_essen.model.UserDoc;
import gorilla_kitchen.stabiles_essen.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import java.security.Principal;


@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final ServiceHelper serviceHelper;

    public String getUserIdFromPrincipal(Principal principal) {
        return userRepository.findByUsername(principal.getName())
                .orElseThrow(() -> new RuntimeException("User not found"))
                .getId();
    }

    public String getUserIdFromPrincipal(UserDetails userDetails) {
        return userRepository.findByUsername(userDetails.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"))
                .getId();
    }

    public String getUserIdFromPrincipal(Authentication authentication) {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        return getUserIdFromPrincipal(userDetails);
    }

    public AuthDTOs.AuthResponse authenticateUser(AuthDTOs.LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        UserDoc user = userRepository.findByUsername(userDetails.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));
        return serviceHelper.buildAuthResponse(user);
    }

    public AuthDTOs.AuthResponse registerUser(AuthDTOs.RegisterRequest registerRequest) {
        UserDoc newUser = serviceHelper.createUser(
                registerRequest.getUsername(),
                registerRequest.getEmail(),
                registerRequest.getPassword()
        );
        return serviceHelper.buildAuthResponse(newUser);
    }
}