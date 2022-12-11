import React from 'react';

import styles from './Message.module.css'

const Message = (props) => {
    return (
        <div>
            <p className={styles.message}>{props.text}</p>
        </div>
    );
};

export default Message;