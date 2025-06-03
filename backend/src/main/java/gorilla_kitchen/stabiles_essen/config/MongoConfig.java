package gorilla_kitchen.stabiles_essen.config;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;


    //config mongo db
    @Configuration
    @PropertySource("classpath:/application.properties")
    public class MongoConfig extends AbstractMongoClientConfiguration {

        @Value("${mongo.data.mongodb.username}")
        private String username;

        @Value("${mongo.data.mongodb.password}")
        private String password;

        @Value("${mongo.data.mongodb.host:localhost}")
        private String host;

        @Value("${mongo.data.mongodb.port:27017}")
        private String port;

        @Value("${mongo.data.mongodb.database:default_kitchen_db}")
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
