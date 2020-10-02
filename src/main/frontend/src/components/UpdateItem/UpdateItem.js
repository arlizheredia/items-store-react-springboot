import React, {useEffect, useState} from "react";
import "./UpdateItem.css";
import {Button, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {connect} from "react-redux";
import {getItem, updateItem} from "../../utils/item-store-utils";
import {useFormik} from "formik";

/**
 * Implementa un componente para la actualización de un producto.
 */
const UpdateItem = (props) => {
    /**
     * Hooks
     */
    const [itemUpdate, setItemUpdate] = useState(0);
    const [categories, setCategories] = useState([]);

    /**
     * Formik wrapper para el Formulario.
     */
    const formik = useFormik({
        initialValues: {
            name: "",
            cost: 0,
            department: "",
            category: ""
        },
        enableReinitialize: true,
        validate: values => {
            const errors = {};
            if (!values.name) errors.name = "Required";
            if (!values.cost) errors.cost = "Required";
            if (!values.department) errors.department = "Required";
            if (!values.category) errors.category = "Required";

            return errors;
        },

        onSubmit: values => {
            const item = {
                id: itemUpdate.id,
                name: values.name,
                cost: values.cost,
                department: values.department,
                category: values.category
            };

            updateItem(item).then(() => {
                props.history.push("/");
            });
        }
    })

    /**
     * Actualizar las categorías de un departamento.
     * @param departmentName Nombre del departamento.
     */
    const setCategoriesFromDepartment = (departmentName) => {
        const department = props.departments.find(
            (department) => department.name === departmentName
        )

        if (department) {
            setCategories(department.categories);
        }
    }

    useEffect(() => {
        // Obteniendo el producto.
        getItem(props.match.params.id).then((item) => {
            setCategoriesFromDepartment(item.department);
            setItemUpdate(item);
            formik.setValues(item);
        });
    }, [])

    return itemUpdate ? (
        <div>
            <h1>Update Item</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-2">
                    <TextField
                        name="name"
                        label="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        required
                    />
                    {formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
                </div>
                <div className="mb-2">
                    <TextField
                        name="cost"
                        label="Cost"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.cost}
                        required
                    />
                    {formik.errors.cost ? <div className="error">{formik.errors.cost}</div> : null}
                </div>
                <div className="mb-2">
                    <InputLabel id="department-label">Department</InputLabel>
                    <Select
                        name="department"
                        labelId="department-label"
                        value={formik.values.department}
                        placeholder="Select department ..."
                        onChange={(e) => {
                            formik.handleChange(e);
                            setCategoriesFromDepartment(e.target.value, props.departments);
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
                        placeholder="Select category ..."
                        required
                    >
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
                    Update
                </Button>
            </form>
        </div>
    ) : (
        <div>Loading ...</div>
    );
}

export default connect((state) => {
    return {
        departments: state.departments
    };
})(UpdateItem);
