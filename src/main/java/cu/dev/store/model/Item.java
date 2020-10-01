package cu.dev.store.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private Float cost;
    private String department;
    private String category;

    public Item(String name, Float cost, String department, String category) {
        this.name = name;
        this.cost = cost;
        this.department = department;
        this.category = category;
    }
}
