import React, {useCallback, useEffect} from "react";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import Items from "../Items/Items";
import {deleteItem, getDepartments, getItems} from "../../utils/item-store-utils";
import {Actions} from "../../redux/actions";

/**
 * Implementa un componente principal de la Aplicación.
 */
const App = (props) => {
    useEffect(() => {
        // Actualizando los departamentos para los formularios de Agregar y Actualizar productos.
        getDepartments().then((departments) => {
            props.dispatch(Actions.setDepartments(departments));
        });

        // Actualizando los productos.
        getItems().then((items) => {
            props.dispatch(Actions.setItems(items));
        });
    }, [])

    /**
     * Redirección para actualizar un producto.
     * @param item Producto.
     */
    const onUpdate = useCallback((item) => {
        props.history.push(`/items/update/${item.id}`);
    }, [props.history]);

    /**
     * Elimina un producto.
     */
    const onDelete = useCallback((itemId) => {
        deleteItem(itemId).then(() => {
            props.history.go(0);
        });
    }, [props.history]);

    /**
     * Al hacer vinculo en botón Agregar.
     */
    const onLinkAdd = () => {
        props.history.push("/items/add");
    }

    return (
        <div>
            <Items onUpdate={onUpdate} onDelete={onDelete}/>
            <Button
                variant="contained"
                color="primary"
                onClick={() => onLinkAdd()}
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
