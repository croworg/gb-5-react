import React from 'react';
import styles from './Message.module.css'

export const Message = (props) => {
    function epochToJsDate(ts) {
        // ts = epoch timestamp
        // returns date obj
        return new Date(ts).toLocaleTimeString();
    }

    return (
        <div className={`
        ${styles.message}
        ${props.author === 'Bot' && styles.botMessage}
        ${props.author === 'Me' && styles.myMessage}
        `}>
            <header>
                <span className={styles.author}>{props.author}</span>
                <span className={styles.date}>{props.timestamp && epochToJsDate(props.timestamp)}</span>
            </header>
            {/*<p>Message:</p>*/}
            <p>{props.text}</p>
        </div>
    );
};