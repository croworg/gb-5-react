import React from 'react';
import {Message} from "../Message/Message";
// css
import styles from './MessageList.module.css'

export const MessageList = (props) => {
    return (
        <div className={styles.wrapper}>
            {/*<h2>Message list</h2>*/}
            {!props.messages.length && <h2>Empty chat</h2>}
            {props.messages.map((item, index) => {
                const lastMessage = () => {
                    if (index + 1 === props.messages.length) {
                        return <p>123</p>;
                    }
                }
                return lastMessage(), <Message key={index} {...item} />
            })}
        </div>
    );
};