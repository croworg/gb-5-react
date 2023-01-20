import styles from './MessageList.module.css'
// import {push} from 'firebase/database';
//
// import {getMessageListById} from '../../services/firebase';
import {Message} from "../Message/Message";

export const MessageList = ({messages}) => {

    const renderMessages = (messages) => {
        if (!messages?.length) return <center>There are no messages =(</center>

        return (messages?.map((item, index) => (
            <Message key={index} {...item} />
        )));
    };

    return (
        <div className={styles.wrapper}>
            {renderMessages(messages)}
        </div>
    );
};