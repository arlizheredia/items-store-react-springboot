import React, {useState} from "react";
import {
    Avatar,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    ListItem,
    ListItemAvatar,
    Tooltip
} from "@material-ui/core";
import Redeem from "@material-ui/icons/Redeem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import "./Item.css";

/**
 * Implementa un componente presetacional para la visualización de un producto.
 */
const Item = (props) => {

    /**
     *  Hook para establecer el identificador de un producto seleccionado.
     */
    const [itemId, setItemId] = useState(0);

    return (
        <div>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                maxWidth="sm"
                open={itemId !== 0}
                aria-labelledby="confirmation-dialog-title"
            >
                <DialogTitle id="confirmation-dialog-title">Delete</DialogTitle>
                <DialogContent>
                    Delete this item from the Store?
                </DialogContent>
                <DialogActions>
                    <Button
                        type="button"
                        className="outline"
                        onClick={() => setItemId(0)}
                        color="primary"
                    >
                        Cancel
                    </Button>
                    <Button
                        type="button"
                        className="outline"
                        onClick={() => props.onDelete(itemId)}
                        color="primary"
                    >
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
            {
                props.item &&
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <Redeem/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={props.item.name}
                        secondary={`$${props.item.cost} - (${props.item.department}: ${props.item.category})`}
                    />
                    <ListItemSecondaryAction>
                        <Tooltip title="Update Item">
                            <IconButton
                                edge="end"
                                aria-label="edit"
                                onClick={() => props.onUpdate(props.item)}
                            >
                                <EditIcon/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete Item">
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => setItemId(props.item.id)}
                            >
                                <DeleteIcon/>
                            </IconButton>
                        </Tooltip>
                    </ListItemSecondaryAction>
                </ListItem>}
        </div>
    )
}

export default (Item);
