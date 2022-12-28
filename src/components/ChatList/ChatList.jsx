import React from "react";
import {Divider, List, ListItem, ListItemButton, ListItemText} from "@mui/material";

// import styles from './ChatList.module.css'
// import Message from "../Message/Message";

const ChatList = (props) => {
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
                                <ListItemText primary={item.name}/>
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

export default ChatList;