import styles from './Chat.module.css';
import React from 'react';
import {MessageList} from "../MessageList/MessageList";
import {NewMessage} from "../NewMessage/NewMessage";

export const Chat = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <h2>Chat Name</h2>
            </div>
            <MessageList messages={props.messages} />
            <NewMessage addMessage={props.addMessage} />
        </div>
    );
};