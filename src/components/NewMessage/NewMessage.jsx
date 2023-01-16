import styles from './NewMessage.module.css';

import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {push} from 'firebase/database';

import {getMessageListById} from '../../services/firebase';
import {addMessageWithReply} from "../../store/messages/actions";

import MuiTextField from '@mui/material/TextField'
import MuiButton from '@mui/material/Button'

export const NewMessage = () => {
    const timestamp = Date.now();
    const [text, setText] = useState('');
    const {chatId} = useParams();
    const dispatch = useDispatch();

    const inputRef = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();
        // text &&
        dispatch(addMessageWithReply(chatId, {
            author: 'Me',
            timestamp,
            text
        }));
        push(getMessageListById(chatId), {
            author: 'Me',
            timestamp,
            text
        })
        // console.log('chatId: ', chatId, ', messageText: ', text);
        setText('');
        inputRef.current?.focus();
    }

    // Set cursor on mount
    useEffect(() => {
        // console.log('timestamp', timestamp);
        inputRef.current.focus();
    }, [])

    return (
        <div className={styles.wrapper}>
            {/*<h2>Add new message</h2>*/}
            <form onSubmit={handleSubmit}>
                <MuiTextField
                    sx={{backgroundColor: 'white'}}
                    style={{width: '100%'}}
                    // inputRef={input => input && input.focus()}
                    inputRef={inputRef}
                    id={'outlined-basic'}
                    label={'Your message'}
                    variant={'outlined'}
                    value={text}
                    onChange={event => setText(event.target.value)}
                />
                <MuiButton
                    color={'success'}
                    variant={'contained'}
                    size={'large'}
                    onClick={handleSubmit}
                >
                    Send
                </MuiButton>
            </form>
        </div>
    );
};