//package gorilla_kitchen.stabiles_essen.utils;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import java.util.Collection;
//import java.util.Collections;
//
//
//public class CustomUserDetails implements UserDetails {
//    private final String username;
//    private final String password;
//    private final String email;  // Your custom field
//
//    public CustomUserDetails(String username, String password, String email) {
//        this.username = username;
//        this.password = password;
//        this.email = email;
//    }
//
//    // Required methods
//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        return Collections.emptyList(); // Or implement roles
//    }
//
//    @Override
//    public String getPassword() { return password; }
//
//    @Override
//    public String getUsername() { return username; }
//
//    // Your custom getter
//    public String getEmail() { return email; }
//
//    // These can be implemented based on your requirements
//    @Override
//    public boolean isAccountNonExpired() { return true; }
//
//    @Override
//    public boolean isAccountNonLocked() { return true; }
//
//    @Override
//    public boolean isCredentialsNonExpired() { return true; }
//
//    @Override
//    public boolean isEnabled() { return true; }
//}