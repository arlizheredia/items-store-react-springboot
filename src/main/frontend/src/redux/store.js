import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { SET_DEPARTMENTS, SET_ITEMS, SET_CATEGORIES } from "./types";

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
    case SET_ITEMS:
      return {
        ...state,
        items: action.items,
      };
    case SET_DEPARTMENTS:
      return {
        ...state,
        departments: action.departments,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    default:
      return state;
  }
};

/**
 * Estado.
 * @type {Store<unknown, Action>}
 */
const store = createStore(reducer, composeWithDevTools());

export default store;
