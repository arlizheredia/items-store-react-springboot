package cu.dev.store.controller;

import cu.dev.store.model.Item;
import cu.dev.store.service.ItemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

import java.util.List;

@RestController
public class ItemsController {
    @Autowired
    private ItemsService itemsService;

    @RequestMapping(value = "/items", method = RequestMethod.GET)
    public ResponseEntity<Item> list() {
        List<Item> items = itemsService.list();
        return new ResponseEntity(items, HttpStatus.OK);
    }

    @RequestMapping(value = "/items/{id}", method = RequestMethod.GET)
    public ResponseEntity<Item> getItemById(@PathVariable("id") Integer id) {
        Item item = itemsService.get(id);
        return new ResponseEntity(item, HttpStatus.OK);
    }

    @RequestMapping(value = "/items", method = RequestMethod.POST)
    public ResponseEntity<Item> create(@Valid @RequestBody Item item) {
        Item itemCreated = itemsService.create(item);
        return new ResponseEntity(itemCreated, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/items/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Item> update(@PathVariable("id") Integer id,  @Valid @RequestBody Item item) {
        return new ResponseEntity(itemsService.update(id, item), HttpStatus.OK);
    }

    @RequestMapping(value = "/items/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Integer> deleteItemById(@PathVariable("id") Integer id) {
        if (!itemsService.delete(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}
