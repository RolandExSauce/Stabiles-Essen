package gorilla_kitchen.stabiles_essen.service;
import gorilla_kitchen.stabiles_essen.model.UserModel;
import gorilla_kitchen.stabiles_essen.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;
import java.util.Collections;


//create a custom user detail service class using user details service
@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) {
        UserModel user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        return new User(
                user.getUsername(),
                user.getPassword(),

                //just use default role
                //later implement more
                Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"))
        );
    };
};