import React, {useRef, useState} from 'react';
import styles from './NewMessage.module.css';
import {TextField as MuiTextField, Button as MuiButton} from "@mui/material";

const NewMessage = ({ addMessage }) => {
    const [text, setText] = useState('');
    const inputRef = useRef(null);

    const handleSubmit = e => {
        e.preventDefault()
        addMessage({
            author: 'Me',
            text
        })
        setText('')
        inputRef.current?.focus();
    }

    return (
        <div className={styles.wrapper}>
            {/*<h2>Add new message</h2>*/}
            <form onSubmit={handleSubmit}>
                <MuiTextField
                    sx={{backgroundColor: 'white'}}
                    style={{width: '100%'}}
                    inputRef={input => input && input.focus()}
                    id="outlined-basic"
                    label="Your message"
                    variant="outlined"
                    value={text}
                    onChange={event => setText(event.target.value)}
                />
                <MuiButton variant="contained" onClick={handleSubmit}>Send</MuiButton>
            </form>
        </div>
    );
};

export default NewMessage;