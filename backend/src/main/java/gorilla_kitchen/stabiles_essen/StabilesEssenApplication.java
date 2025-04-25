package gorilla_kitchen.stabiles_essen;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.SpringApplication;



@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class StabilesEssenApplication {
	public static void main(String[] args) {
		SpringApplication.run(StabilesEssenApplication.class, args);
	}

}

