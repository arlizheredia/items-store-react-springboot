/**
 * Url base del API JSON.
 * @type {string}
 */
//const baseUrl = "http://localhost:3001";
const baseUrl = "";
/**
 * Obtiene un producto por su identificador.
 * @param id Identificador del producto.
 */
export const getItem = (id) => {
    return fetch(`${baseUrl}/items/${id}`).then((response) =>
        response.json()
    );
};

/**
 * Obtiene todos los productos de la tienda.
 */
export const getItems = () => {
    return fetch(`${baseUrl}/items`).then((response) =>
        response.json()
    );
};

/**
 * Obtiene los departamentos de la tienda.
 */
export const setDepartments = () => {
    return fetch(`${baseUrl}/departments`).then((response) =>
        response.json()
    );
};

/**
 * Agrega un producto a la tienda.
 * @param item Producto.
 */
export const addItem = (item) => {
    return fetch(`${baseUrl}/items`, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(item),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());
}

/**
 * Actualiza un producto en la tienda.
 * @param item Producto.
 * @returns {Promise<Response>}
 */
export const updateItem = (item) => {
    return fetch(`${baseUrl}/items/${item.id}`, {
        method: "PUT",
        mode: "cors",
        body: JSON.stringify(item),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());
}

/**
 * Elimina un producto en la tienda.
 * @param id Identificador del producto.
 * @returns {Promise<Response>}
 */
export const deleteItem = (id) => {
    return fetch(`${baseUrl}/items/${id}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());
}

