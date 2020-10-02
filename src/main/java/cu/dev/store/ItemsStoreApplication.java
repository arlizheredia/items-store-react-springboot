package cu.dev.store;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class ItemsStoreApplication  {
	private static final Logger log = LoggerFactory.getLogger(ItemsStoreApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(ItemsStoreApplication.class, args);
	}

	@Bean
	public CommandLineRunner start() {
		return (args) -> {
			log.info("Items Store Application started");
		};
	}
}
