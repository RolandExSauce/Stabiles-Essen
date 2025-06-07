package gorilla_kitchen.stabiles_essen.controller;
import com.mongodb.DuplicateKeyException;
import gorilla_kitchen.stabiles_essen.dto.*;
import gorilla_kitchen.stabiles_essen.service.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


//auth controller for login and register
@RestController
@RequestMapping("/silverbackkitchen/auth")
@RequiredArgsConstructor
public class AuthController {

    private final  AuthService authService;

    @Operation(summary = "Sign in", description = "Authenticate user and return a JWT token")
    @PostMapping("/signin")
    public AuthDTOs.AuthResponse authenticateUser(@RequestBody AuthDTOs.LoginRequest loginRequest) {

        //To get a better understanding how spring security works, console.log the data from below
        //they should be printed after the filter
        System.out.println("Login request: " + loginRequest);
        try {
            return authService.authenticateUser(loginRequest);
        } catch (AuthenticationException e) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid credentials");
        }
    };

    @Operation(summary = "Sign up", description = "Register a new user")
    @PostMapping("/signup")
    public AuthDTOs.AuthResponse registerUser(@RequestBody AuthDTOs.RegisterRequest registerRequest) {
        try {
            return authService.registerUser(registerRequest);
        } catch (DuplicateKeyException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Username or email already taken");
        }
    };
}
