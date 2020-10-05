import "./ItemEditor.css";

import React, {useCallback, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useFormik} from "formik";
import {Button, Card, CardContent, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {addItem, getItem, updateItem} from "../../utils/item-store-utils";

/**
 * Implementa un componente para la actualización de un producto.
 */
const ItemEditor = (props) => {
    /**
     * Hooks
     */
    const [itemId] = useState(props.match.params.id);
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [itemUpdate, setItemUpdate] = useState(undefined);
    const [updateMode, setUpdateMode] = useState(false);
    const departments = useSelector(state => state.departments)

    /**
     * Actualizar las categorías de un departamento.
     * @param departmentName Nombre del departamento.
     */
    const setCategoriesFromDepartment = useCallback((departmentName) => {
        const department = departments.find(
            (department) => department.name === departmentName
        )

        if (department) {
            setCategories(department.categories);
        }
    }, [departments])

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
            let item = {
                name: values.name,
                cost: values.cost,
                department: values.department,
                category: values.category
            };

            if (updateMode) {
                item.id = itemUpdate.id;

                updateItem(item).then(() => {
                    props.history.push("/");
                }).catch(reason => {
                    console.error("An error occurred while trying to update the item ", reason);
                });
            } else {
                addItem(item).then(() => {
                    props.history.push("/");
                }).catch(reason => {
                    console.error("An error occurred while trying to create the item ", reason);
                });
            }
        }
    })

    useEffect(() => {
        if (itemId) {
            setUpdateMode(true);
            setLoading(true);
            // Obteniendo el producto.
            getItem(itemId).then((item) => {
                setLoading(false);
                setItemUpdate(item);
            })
        }
    }, [itemId]);

    useEffect(() => {
        if (itemUpdate !== undefined) {
            setCategoriesFromDepartment(itemUpdate.department);
            formik.setValues(itemUpdate);
        }
    }, [itemUpdate, setCategoriesFromDepartment])

    return (
        loading ? (<div>Loading Item ...</div>) :
            (<div>
                <h1>{updateMode ? "Update" : "Add"} Item</h1>
                <form onSubmit={formik.handleSubmit}>
                    <Card className="item-editor mb-2">
                        <CardContent>
                            <div className="mb-2">
                                <TextField
                                    name="name"
                                    label="Name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    error={formik.errors.name}
                                    helperText={formik.errors.name ? formik.errors.name : null}
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <TextField
                                    name="cost"
                                    label="Cost"
                                    type="number"
                                    onChange={formik.handleChange}
                                    value={formik.values.cost}
                                    error={formik.errors.cost}
                                    helperText={formik.errors.cost ? formik.errors.cost : null}
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <InputLabel id="department-label">Department</InputLabel>
                                <Select
                                    name="department"
                                    labelId="department-label"
                                    value={formik.values.department}
                                    error={formik.errors.department}
                                    helperText={formik.errors.department ? formik.errors.department : null}
                                    placeholder="Select department ..."
                                    onChange={(e) => {
                                        formik.handleChange(e);
                                        setCategoriesFromDepartment(e.target.value, props.departments);
                                    }}
                                    required
                                >
                                    {departments.map((department) => {
                                        return (
                                            <MenuItem key={department.id} value={department.name}>
                                                {department.name}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </div>
                            <div className="mb-2">
                                <InputLabel id="category-label">Category</InputLabel>
                                <Select
                                    name="category"
                                    labelId="category-label"
                                    onChange={formik.handleChange}
                                    value={formik.values.category}
                                    error={formik.errors.category}
                                    helperText={formik.errors.category ? formik.errors.category : null}
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
                            </div>
                        </CardContent>
                    </Card>
                    <Button type="submit" variant="contained" color="primary">
                        {updateMode ? "Update" : "Add"}
                    </Button>
                </form>


            </div>)
    )
}

export default ItemEditor;
