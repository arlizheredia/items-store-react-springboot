package cu.dev.store.dao;

import cu.dev.store.model.Department;
import org.springframework.data.repository.CrudRepository;

public interface DepartmentDAO extends CrudRepository<Department, Integer> {
}
