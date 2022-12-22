import React, {useEffect, useState} from 'react';
import MessageList from "./components/MessageList/MessageList";
import NewMessage from "./components/NewMessage/NewMessage";
import {cleanup} from "@testing-library/react";


export const App = () => {
    const [messageList, setMessageList] = useState([]);

    const addMessage = newMessage => {
        setMessageList([...messageList, newMessage])
    }

    useEffect(() => {
        if (messageList.length > 0 && messageList[messageList.length - 1].author !== 'Bot') {
            const timeout = setTimeout(() => {
                addMessage({
                    author: 'Bot',
                    text: 'Hey, glad to see you here!'
                })
            }, 1500)
            return () => {
                clearTimeout(timeout);
            }
        }
    }, [messageList])

    return (
        <>
            <NewMessage addMessage={addMessage}/>
            <MessageList messages={messageList}/>
        </>
    );
};

// export default App;