import React from 'react';
import styles from './Message.module.css'

const Message = (props) => {
    return (
        <div className={styles.message}>
            <span>Author: {props.author}</span>
            <p>Message:</p>
            <p>{props.children}</p>
        </div>
    );
};

export default Message;