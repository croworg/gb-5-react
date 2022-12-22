import React, {useState} from 'react';
import styles from './NewMessage.module.css';

const NewMessage = ({ addMessage }) => {
    const [text, setText] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
        addMessage({
            author: 'Me',
            text
        })
        setText('')
    }
    return (
        <div className={styles.addMessage}>
            <h2>Add new message</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    value={text}
                    onChange={event => setText(event.target.value)}
                />
                <button>Send</button>
            </form>
        </div>
    );
};

export default NewMessage;