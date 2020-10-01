package cu.dev.store.service;

import cu.dev.store.dao.DepartmentDAO;
import cu.dev.store.model.Department;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DepartmentsService {
    /**
     *
     */
    private final DepartmentDAO departmentDAO;

    /**
     * @param DepartmentDAO
     */
    public DepartmentsService(DepartmentDAO DepartmentDAO) {
        this.departmentDAO = DepartmentDAO;
    }

    /**
     * @return
     */
    public List<Department> list() {
        List<Department> result = new ArrayList<>();
        this.departmentDAO.findAll().forEach(department -> result.add(department));
        return result;
    }

    /**
     * @param id
     * @return
     */
    public Department get(Integer id) {
        return this.departmentDAO.findById(id).get();
    }


}
