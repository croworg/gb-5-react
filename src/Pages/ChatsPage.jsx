import React, {useEffect, useState} from 'react';
import {ChatsList} from '../components/ChatList/ChatsList';
import {Chat} from '../components/Chat/Chat';


const ChatsPage = () => {
    const [messageList, setMessageList] = useState([]);
    const [chatList, setChatList] = useState([
        {id: 1, name: 'Users'},
        {id: 2, name: 'Support'},
    ]);

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
        <div style={{
            display: 'flex',
            height: '100%',
            overflow: 'hidden'
        }}>
            <ChatsList chats={chatList}/>
            <Chat messages={messageList} addMessage={addMessage} />
        </div>
    );
};

export default ChatsPage;