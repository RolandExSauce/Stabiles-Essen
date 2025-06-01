package gorilla_kitchen.stabiles_essen.dto;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;


//dto for login, request and auth response
public class AuthDTOs {

    @Schema(description = "Login request body")
    @Data
    @AllArgsConstructor
    public static class LoginRequest {

        @Schema(description = "Username of the user", example = "john_doe")
        private String username;

        @Schema(description = "Password of the user", example = "securePassword123")
        private String password;
    };

    @Schema(description = "Registration request body")
    @Data
    @AllArgsConstructor
    public static class RegisterRequest {

        @Schema(description = "Username of the new user", example = "john_doe")
        private String username;

        @Schema(description = "Email of the new user", example = "john@example.com")
        private String email;

        @Schema(description = "Password of the new user", example = "securePassword123")
        private String password;
    };

    @Schema(description = "Authentication response containing JWT and user info")
    @Data
    @AllArgsConstructor
    public static class AuthResponse {

        @Schema(description = "JWT token for authenticated requests", example = "eyJhbGciOiJIUzI1NiIsIn...")
        private String token;

        @Schema(description = "Username of the authenticated user", example = "john_doe")
        private String username;

        @Schema(description = "Email of the authenticated user", example = "john@example.com")
        private String email;
    };
};
