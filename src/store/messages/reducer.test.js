import {messagesReducer} from './reducer';
import {ADD_CHAT, ADD_MESSAGE, DELETE_CHAT} from "./actions";

describe('messages reducer', () => {
    it('should return the initial state', () => {
        expect(messagesReducer(undefined, {})).toEqual({});
    });

    it('should handle ADD_MESSAGE', () => {
        const state = {chat: []};
        const action = {
            type: ADD_MESSAGE,
            payload: {
                chatName: 'chat',
                author: 'Username',
                text: 'Text'
            }
        };
        expect(messagesReducer(state, action)).toEqual({
            chat: {
                chat: [{
                    author: 'Username', text: 'Text'
                }]
            }
        });
    });

    // it('should handle TOGGLE_PROFILE');
    // it('should handle IS_AUTH');
});