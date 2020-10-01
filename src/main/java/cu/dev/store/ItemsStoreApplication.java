package cu.dev.store;

import cu.dev.store.service.DepartmentsService;
import cu.dev.store.service.ItemsService;
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
	public CommandLineRunner start(ItemsService itemsService, DepartmentsService departmentsService) {
		return (args) -> {
			log.info("Items Store starting ...");

			//System.out.println(departmentsService.list());


//			System.out.println(itemsService.list());
//			Item item = itemsService.get(1);
//			item.setName("y");
//			System.out.println(itemsService.save(item));
//
//			itemsService.save(new Item( "x", 12.34f, "Shoes", "Fashion boot"));
//			System.out.println(itemsService.list());
		};
	}
}
