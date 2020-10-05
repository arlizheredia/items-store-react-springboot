import "./Items.css";

import React from "react";
import {useSelector} from "react-redux";
import {Button, Card, CardContent, List, Tooltip} from "@material-ui/core";
import Item from "../Item/Item";

/**
 * Implementa un componente para la visualización de productos.
 */
const Items = (props) => {
    const items = useSelector(state => state.items);
    return items ? (
        <div className="items">
            <h1>Items</h1>
            <Card className="mb-2">
                <CardContent>
                    <span className="header mb-1"><b>{items.length}</b> items in Store</span>
                    <div>
                        <List>
                            {items.map((item) => {
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
                </CardContent>
            </Card>
            <Tooltip title="Add new Item">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => props.onLinkAdd()}
                >
                    New Item
                </Button>
            </Tooltip>
        </div>
    ) : (
        <div className="mb-2">No items in Store.</div>
    );
}

export default Items;
