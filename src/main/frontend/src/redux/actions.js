import {Types} from "./types";

/**
 * Acciones para la transformación del estado.
 */
export const Actions = {
    /**
     * Acción para actualizar los departamentos.
     * @param departments Departamentos.
     */
    setDepartments: (departments) => {
        return {
            type: Types.SET_DEPARTMENTS,
            departments: departments,
        }
    },

    /**
     * Acción para actualizar los productos.
     * @param items Productos.
     */
    setItems: (items) => {
        return {
            type: Types.SET_ITEMS,
            items: items,
        }
    }
}