import styles from './Chat.module.css';

import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectMessage} from "../../store/messages/selectors";

import {MessageList} from "../MessageList/MessageList";
import {NewMessage} from "../NewMessage/NewMessage";

export const Chat = (props) => {
    const {chatId} = useParams()
    const messages = useSelector(selectMessage)

    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <h2>Chat Name</h2>
            </div>
            <MessageList
                messages={chatId ? messages[chatId] : []}
            />
            <NewMessage addMessage={props.addMessage} />
        </div>
    );
};