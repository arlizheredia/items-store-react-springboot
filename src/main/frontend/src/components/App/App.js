import React, {useCallback, useEffect, useState} from "react";
import Items from "../Items/Items";
import {deleteItem, getDepartments, getItems} from "../../utils/item-store-utils";
import {Actions} from "../../redux/actions";
import store from "../../redux/store";

/**
 * Implementa un componente principal de la Aplicación.
 */
const App = (props) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Actualizando los departamentos para los formularios de Agregar y Actualizar productos.
        getDepartments().then((departments) => {
            store.dispatch(Actions.setDepartments(departments));
        });

        // Actualizando los productos.
        setLoading(true);
        getItems().then((items) => {
            store.dispatch(Actions.setItems(items));
            setLoading(false);
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
    const onLinkAdd = useCallback(() => {
        props.history.push("/items/add");
    }, [props.history]);

    return (
        <div>
            {loading ? (<div className="mb-2">Loading Items ...</div>) :
                (<Items onUpdate={onUpdate} onDelete={onDelete} onLinkAdd={onLinkAdd}/>)
            }
        </div>
    );
}

export default App;
