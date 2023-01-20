import styles from './Chat.module.css';

import React from 'react';
import {useParams} from "react-router-dom";

import {MessageList} from "../MessageList/MessageList";
import {NewMessage} from "../NewMessage/NewMessage";

export const Chat = ({chats}) => {
    const {chatId} = useParams();
    // const messages = useSelector(selectMessage);
    // console.log('messagesDB: ', Object.entries(messagesDB).map(m => m[1].messageList));
    // console.log(Object.entries(messagesDB).length === 0 ? 'nope' : 'yep');

    // const chatData = Object.entries(messagesDB).find(chat => chat[0] === chatId);
    // const chatMessages = chatData && Object.values(chatData[1].messageList);
    // const messagesList = chatMessages ? chatMessages : ([{text: 'There is no messages yet'}]);

    const messagesChat = chats.find(chat => chat?.name === chatId);
    let messages;
    if (messagesChat?.messages) {
        messages = Object.entries(messagesChat.messages).map(mes => ({
            author: mes[1].author,
            text: mes[1].text,
            timestamp: mes[1].timestamp,
        }))
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <h2>Chat Name</h2>
            </div>
            <MessageList
                // messages={chatId ? messages[chatId] : []}
                messages={messages}
            />
            <NewMessage
                // addMessage={props.addMessage}
            a/>
        </div>
    );
};