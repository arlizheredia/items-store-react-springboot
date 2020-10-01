package cu.dev.store.controller;

import cu.dev.store.model.Department;
import cu.dev.store.service.DepartmentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class DepartmentsController {
    @Autowired
    private DepartmentsService departmentsService;

    @RequestMapping(value = "/departments", method = RequestMethod.GET)
    public ResponseEntity<Department> list() {
        List<Department> departments = departmentsService.list();
        return new ResponseEntity(departments, HttpStatus.OK);
    }
}
