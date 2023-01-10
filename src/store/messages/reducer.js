import {AUTHOR} from "../../constants";
import {ADD_CHAT, DELETE_CHAT, ADD_MESSAGE} from "./actions";

const initialState = {
    support: [
        {
            author: AUTHOR.bot,
            text: 'Welcome! We glad to see you here!'
        },
        {
            author: AUTHOR.user,
            text: 'Message two'
        }
    ]
};

export const messagesReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ADD_CHAT:
            return {
                ...state,
                [payload]: []
            }

        case DELETE_CHAT:
            const chats = { ...state };
            delete chats[payload];
            return chats;

        case ADD_MESSAGE:
            return {
                ...state,
                [payload.chatName]: [
                    ...state[payload.chatName],
                    {
                        author: payload.author,
                        // timestamp: payload.timestamp,
                        text: payload.text,
                    }
                ],
            }

        default:
            return state;
    }
}