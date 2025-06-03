package gorilla_kitchen.stabiles_essen.config;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;
import lombok.NonNull;


    //config mongo db, maybe actually not needed unless for further config
    @Configuration
    @PropertySource("classpath:/mongo.properties")
    public class MongoConfig extends AbstractMongoClientConfiguration {

        @Value("${mongo.username}")
        private String username;

        @Value("${mongo.password}")
        private String password;

        @Value("${mongo.host:localhost}")
        private String host;

        @Value("${mongo.port:27017}")
        private String port;

        @Value("${mongo.database:default_kitchen_db}")
        private String database;

        @NonNull
        @Override
        public String getDatabaseName() { return database; }


        @NonNull
        @Override
        public MongoClient mongoClient() {
            String connectionString = String.format(
                    "mongodb://%s:%s@%s:%s/%s?authSource=admin",
                    username,
                    password,
                    host,
                    port,
                    database
            );
            return MongoClients.create(connectionString);
        };
    };
