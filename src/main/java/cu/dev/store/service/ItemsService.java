package cu.dev.store.service;

import cu.dev.store.dao.ItemDAO;
import cu.dev.store.model.Item;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ItemsService {
    /**
     *
     */
    private final ItemDAO itemDAO;

    /**
     * @param itemDAO
     */
    public ItemsService(ItemDAO itemDAO) {
        this.itemDAO = itemDAO;
    }

    /**
     * @return
     */
    public List<Item> list() {
        List<Item> result = new ArrayList<>();
        this.itemDAO.findAll().forEach(item -> result.add(item));
        return result;
    }

    /**
     * @param id
     * @return
     */
    public Item get(Integer id) {
        return this.itemDAO.findById(id).get();
    }

    /**
     * @param item
     */
    public Item create(Item item) {
        return this.itemDAO.save(item);
    }

    public Item update(Integer id, Item itemForUpdate) {
        Item item = this.itemDAO.findById(id).get();

        item.setName(itemForUpdate.getName());
        item.setCost(itemForUpdate.getCost());
        item.setDepartment(itemForUpdate.getDepartment());
        item.setCategory(itemForUpdate.getCategory());
        return this.itemDAO.save(item);
    }

    /**
     * @param id
     * @return
     */
    public boolean delete(Integer id) {
        this.itemDAO.deleteById(id);
        return !this.itemDAO.existsById(id);
    }
}
