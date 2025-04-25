package gorilla_kitchen.stabiles_essen.dto;
import lombok.AllArgsConstructor;
import lombok.Data;


//dto for login, request and auth response
public class AuthDTOs {

    @Data
    @AllArgsConstructor
    public static class LoginRequest {
        private String username;
        private String password;
    };

    @Data
    @AllArgsConstructor
    public static class RegisterRequest {
        private String username;
        private String email;
        private String password;
    };

    @Data
    @AllArgsConstructor
    public static class AuthResponse {
        private String token;
        private String username;
        private String email;
    };
}
