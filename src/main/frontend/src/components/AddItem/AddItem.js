import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import "./AddItem.css";
import {TextField, InputLabel, Select, MenuItem, Button} from "@material-ui/core";
import {useFormik} from "formik";
import {SET_DEPARTMENTS} from "../../redux/types";
import {addItem, setDepartments} from "../../utils/item-store-utils";

/**
 * Implementa un componente para agregar un producto.
 */
const AddItem = (props) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (props.departments.length === 0) {
            props.history.push("/");
        }
        //Actualizando los departamentos.
        setDepartments().then((departments) => {
            props.dispatch({
                type: SET_DEPARTMENTS,
                departments: departments,
            });
        });

    }, []);

    const formik = useFormik({
        initialValues: {
            name: '',
            cost: 0,
            department: '',
            category: ''
        },

        validate: values => {
            const errors = {};
            if (!values.name) errors.name = "Required";
            if (!values.cost) errors.cost = "Required";
            if (!values.department) errors.department = "Required";
            if (!values.category) errors.category = "Required";

            return errors;
        },

        onSubmit: values => {
            const newItem = {
                name: values.name,
                cost: values.cost,
                department: values.department,
                category: values.category
            };

            addItem(newItem).then(() => {
                props.history.push("/");
            });
        }
    })

    /**
     * Actualizar las categorías de un departamento.
     * @param departmentName Nombre del departamento.
     * @param props Lista de departamentos.
     */
    const setCategoriesFromDepartment = (departmentName) => {
        const department = props.departments.find(
            (department) => department.name === departmentName
        )

        if (department) {
            setCategories(department.categories);
        }
    }

    return (
        <div>
            <h1>Add Item</h1>
            {<form onSubmit={formik.handleSubmit}>
                <div className="mb-2">
                    <TextField
                        name="name"
                        label="Name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        required/>
                    {formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
                </div>
                <div className="mb-2">
                    <TextField
                        name="cost"
                        label="Cost"
                        onChange={formik.handleChange}
                        value={formik.values.cost}
                        required/>
                    {formik.errors.cost ? <div className="error">{formik.errors.cost}</div> : null}
                </div>
                <div className="mb-2">
                    <InputLabel id="department-label">Department</InputLabel>
                    <Select
                        name="department"
                        labelId="department-label"
                        value={formik.values.department}
                        onChange={(e) => {
                            formik.handleChange(e);
                            setCategoriesFromDepartment(e.target.value);
                        }}
                        required
                    >
                        {props.departments.map((department) => {
                            return (
                                <MenuItem key={department.name} value={department.name}>
                                    {department.name}
                                </MenuItem>
                            );
                        })}
                    </Select>
                    {formik.errors.department ? <div className="error">{formik.errors.department}</div> : null}
                </div>
                <div className="mb-2">
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select
                        name="category"
                        labelId="category-label"
                        onChange={formik.handleChange}
                        value={formik.values.category}
                        required>
                        {categories.map((category) => {
                            return (
                                <MenuItem key={category.name} value={category.name}>
                                    {category.name}
                                </MenuItem>
                            );
                        })}
                    </Select>
                    {formik.errors.category ? <div className="error">{formik.errors.category}</div> : null}
                </div>

                <Button type="submit" variant="contained" color="primary">
                    Add
                </Button>
            </form>}
        </div>
    );
}

export default connect((state) => {
    return {
        departments: state.departments
    };
})(AddItem);
