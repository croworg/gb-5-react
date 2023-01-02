import React from "react";
import {Divider, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {Link} from "react-router-dom";

export const ChatsList = (props) => {
    return (
        <nav
            style={{width: '200px', flex: '0 0 200px'}}
            aria-label="secondary mailbox folders"
        >
            <List>
                {props.chats.map((item) => (
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
                        <ListItemText primary="New chat"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </nav>
    );
};