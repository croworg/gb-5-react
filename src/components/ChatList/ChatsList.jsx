import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {set, push, remove} from 'firebase/database';

import {messagesRef} from '../../services/firebase';
import {addChat, deleteChat} from "../../store/messages/actions";
import {selectChat} from "../../store/messages/selectors";

import {Divider, List, ListItem, ListItemButton} from "@mui/material";
import Button from "@mui/material/Button";

export const ChatsList = ({messageDB}) => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const chats = useSelector(selectChat)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return console.warn('Empty chat name!');
        dispatch(addChat(value));

        set(messagesRef, {
            ...messageDB,
            [value]: {
                name: value
            }
        });
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
                            <ListItemButton
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                <Link to={`/chats/${item.name}`}>{item.name}</Link>
                                <Button
                                    style={{
                                        fontSize: '130%',
                                        lineHeight: '15px',
                                        minWidth: '20px',
                                        minHeight: '20px',
                                        marginLeft: '1rem',
                                        padding: '0'
                                    }}
                                    color={'error'}
                                    variant={'outlined'}
                                    onClick={() => dispatch(deleteChat(item.name))}
                                >
                                    &times;
                                </Button>
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
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <button type={'submit'} disabled={!value}>Add chat</button>
                        </form>
                    </ListItemButton>
                </ListItem>
            </List>
        </nav>
    );
};