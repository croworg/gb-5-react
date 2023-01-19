// import {messagesReducer} from "./reducer";
import {AUTHOR} from "../../constants";

export const ADD_CHAT = 'ADD_CHAT';
export const DELETE_CHAT = 'DELETE_CHAT';
export const ADD_MESSAGE = 'ADD_MESSAGE';

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    payload: newChat
});

export const deleteChat = (chatName) => ({
    type: DELETE_CHAT,
    payload: chatName
});

export const addMessage = (chatName, message) => ({
    type: ADD_MESSAGE,
    payload: {chatName, ...message}
});

let timeout;
export const addMessageWithReply = (chatName, message) => (dispatch) => {
    dispatch(addMessage(chatName, message));

    if (message.author !== AUTHOR.bot) {
        timeout && clearTimeout(timeout);

        timeout = setTimeout(() => {
            dispatch(addMessage(chatName, {
                author: AUTHOR.bot,
                text: 'Hey, glad to see you here!',
            }))
        }, 5000);
    }
};