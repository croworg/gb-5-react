import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Divider, List, ListItem, ListItemButton} from "@mui/material";
import {nanoid} from "nanoid";

export const ChatsList = ({chats, onAddChat}) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddChat({
            id: nanoid(),
            name: value
        });
        setValue('');
    };

    return (
        <nav
            style={{width: '200px', flex: '0 0 200px'}}
            aria-label="secondary mailbox folders"
        >
            <List>
                {chats.map((item) => (
                    <div key={item.id}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <Link to={`/chats/${item.id}`}>{item.name}</Link>
                                {/*<ListItemText primary={item.name}/>*/}
                            </ListItemButton>
                        </ListItem>
                        <Divider/>
                    </div>
                ))}
                <ListItem disablePadding>
                    <ListItemButton>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={value}
                                onChange={handleChange}
                            />
                            <button type={'submit'}>Add chat</button>
                        </form>
                    </ListItemButton>
                </ListItem>
            </List>
        </nav>
    );
};