import React, {useEffect, useRef, useState} from 'react';
import MuiTextField from '@mui/material/TextField'
import MuiButton from '@mui/material/Button'
// css
import styles from './NewMessage.module.css';

export const NewMessage = ({addMessage}) => {
    const [text, setText] = useState('');
    const inputRef = useRef(null);
    const timestamp = Date.now();

    const handleSubmit = e => {
        e.preventDefault();
        text && addMessage({
            author: 'Me',
            timestamp,
            text
        });
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