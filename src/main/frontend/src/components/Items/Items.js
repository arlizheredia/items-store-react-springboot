import React from "react";
import "./Items.css";
import List from "@material-ui/core/List";
import Item from "../Item/Item";
import {connect} from "react-redux";

/**
 * Implementa un componente para la visualización de productos.
 */
const Items = (props) => {
    return props.items ? (
        <div>
            <h1>Items</h1>
            <div className="items mb-1">
                <List>
                    {props.items.map((item) => {
                        return (
                            <Item key={item.id}
                                  item={item}
                                  onUpdate={props.onUpdate}
                                  onDelete={props.onDelete}
                            />
                        );
                    })}
                </List>
            </div>
        </div>
    ) : (
        <div className="mb-2">No items in Store.</div>
    );
}

export default connect((state) => {
    return {
        items: state.items
    };
})(Items);
