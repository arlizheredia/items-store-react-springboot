import {createStore} from "redux";
import {Types} from "./types";

/**
 * Estado inicial.
 * @type {{departments: [], categories: [], items: []}}
 */
const INITIAL_STATE = {
    /**
     * Productos.
     */
    items: [],

    /**
     * Departamentos.
     */
    departments: [],

    /**
     * Categorías de un departamento seleccionado.
     */
    categories: [],
};

/**
 * Reducer para Redux.
 * @param state Estado.
 * @param action Acción.
 */
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.SET_ITEMS:
            return {
                ...state,
                items: action.items,
            };
        case Types.SET_DEPARTMENTS:
            return {
                ...state,
                departments: action.departments,
            };
        default:
            return state;
    }
};

/**
 * Estado con recuperación desde el almacenamiento en el LocalStore.
 */
const store = createStore(reducer,
    (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {});

/**
 * Almacenamiento del estado en el LocalStore ante cambios.
 */
store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(store.getState())
})

export default store;
