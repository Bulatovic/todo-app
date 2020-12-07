import React from 'react';
import './Todo.css';
import { List, ListItem, ListItemAvatar, ListItemText, Button } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './firebase';

function Todo(props) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    };

    return (
        <>
            <Modal open={open} onClose={e => setOpen(false)}></Modal>
            <List>
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.todo.todo} secondary="deadline" />
                </ListItem>

                <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}>
                </DeleteForeverIcon>
            </List>
        </>
    )
}

export default Todo;
