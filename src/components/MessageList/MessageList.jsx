import React from 'react';
import Message from "../Message/Message";
import styles from './MessageList.module.css'

const MessageList = (props) => {
    return (
        <div className={styles.wrapper}>
            <h2>Message list</h2>
            {props.messages.map((item, index) => (
                <Message key={index} author={item.author}>{item.text}</Message>
            ))}
        </div>
    );
};

export default MessageList;