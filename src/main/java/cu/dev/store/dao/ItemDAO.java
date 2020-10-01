package cu.dev.store.dao;

import cu.dev.store.model.Item;
import org.springframework.data.repository.CrudRepository;

public interface ItemDAO extends CrudRepository<Item, Integer> {}

