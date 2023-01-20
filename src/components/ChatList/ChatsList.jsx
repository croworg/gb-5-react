import styles from './ChatsList.module.scss'

import React, {useEffect, useState} from "react";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {set} from 'firebase/database';

import {messagesRef} from '../../services/firebase';
import {addChat, deleteChat} from "../../store/messages/actions";
import {selectChat} from "../../store/messages/selectors";

import {List, ListItem, ListItemButton} from "@mui/material";
import Button from "@mui/material/Button";

export const ChatsList = ({messagesDB}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const chats = useSelector(selectChat);
    const {chatId} = useParams();
    const [newName, setNewName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newName) return console.warn('Empty chat name!');
        dispatch(addChat(newName));
        set(messagesRef, {
            ...messagesDB,
            [newName]: {
                name: newName
            }
        });
        setNewName('');
        navigate(`/chats/${newName}`);
    };

    const onDeleteChat = (name) => {
        dispatch(deleteChat(name));
    };

    useEffect(() => {
        if (chats.find(chat => chat?.name === chatId)) {
            navigate(`/chats/${chatId}`);
        } else {
            navigate('/chats');
        }
    }, [chats]);

    return (
        <nav className={styles.navbar}>
            <List>
                {chats.map((item) => (
                    <ListItem disablePadding divider key={item.id}>
                        <NavLink className={styles.link} color={'success'} to={`/chats/${item.name}`}>
                            <ListItemButton className={styles.listItem} color={'success'}>
                                <span className={styles.chatName}>{item.name}</span>
                                <Button className={styles.closeButton}
                                    color={'error'}
                                    variant={'outlined'}
                                    onClick={() => onDeleteChat(item.name)}
                                >&times;</Button>
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                ))}
                <ListItem divider>
                    <form className={styles.newChatForm} onSubmit={handleSubmit}>
                        <input className={styles.newChatFormInput}
                            type="text"
                            placeholder={'New chat'}
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                        />
                        <Button className={styles.newChatFormButton}
                            type={'submit'}
                            color={'success'}
                            variant={'outlined'}
                            disabled={!newName}
                        >&#43;</Button>
                    </form>
                </ListItem>
            </List>
        </nav>
    );
};