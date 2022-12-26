import React from 'react';
import MessageList from "../MessageList/MessageList";
import NewMessage from "../NewMessage/NewMessage";

import styles from './Chat.module.css';

const Chat = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}><h2>Chat Name</h2></div>
            <MessageList messages={props.messages}/>
            <NewMessage addMessage={props.addMessage}/>
        </div>
    );
};

export default Chat;