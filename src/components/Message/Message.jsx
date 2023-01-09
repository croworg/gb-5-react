import React from 'react';
import styles from './Message.module.css'
import {AUTHOR} from "../../constants";

export const Message = (props) => {
    function epochToJsDate(ts) {
        // ts = epoch timestamp
        // returns date obj
        return new Date(ts).toLocaleTimeString();
    }

    // debugger;

    return (
        <div className={`
        ${styles.message}
        ${props.author === AUTHOR.bot && styles.botMessage}
        ${props.author === AUTHOR.me && styles.myMessage}
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