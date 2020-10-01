import "./App.css";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {SET_DEPARTMENTS} from "../../redux/types";
import Button from "@material-ui/core/Button";
import Items from "../Items/Items";
import {deleteItem, setDepartments} from "../../utils/item-store-utils";
import {setItems} from "../../utils/items-utils";

/**
 * Implementa un componente principal de la Aplicación.
 */
const App = (props) => {
    useEffect(() => {
        //Obteniendo los departamentos.
        setDepartments().then((departments) => {
            props.dispatch({
                type: SET_DEPARTMENTS,
                departments: departments,
            });
        });

        // Actualizando los productos.
        setItems(props);
    }, [])

    /**
     * Redirección para actualizar un producto.
     * @param item Producto.
     */
    const onUpdate = (item) => {
        props.history.push(`/items/update/${item.id}`);
    };

    /**
     * Elimina un producto.
     */
    const onDelete = (itemId) => {
        deleteItem(itemId).then(() => {
            setItems(props);
        });
    };

    return (
        <div>
            <Items onUpdate={onUpdate} onDelete={onDelete}/>
            <Button
                variant="contained"
                color="primary"
                onClick={() => props.history.push("/items/add")}
            >
                Add Item
            </Button>
        </div>
    );
}

export default connect((state) => {
    return {
        items: state.items,
    };
})(App);
