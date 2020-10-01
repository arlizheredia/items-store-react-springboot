import {SET_ITEMS} from "../redux/types";
import {getItems} from "./item-store-utils";

/**
 * Actualiza los productos de la tienda.
 * @param props Propiedades.
 */
export const setItems = (props) => {
    getItems().then((items) => {
        props.dispatch({
            type: SET_ITEMS,
            items: items,
        });
    });
}


