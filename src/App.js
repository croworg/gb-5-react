import React, {useEffect, useState} from 'react';
// import MessageList from "./components/MessageList/MessageList";
// import NewMessage from "./components/NewMessage/NewMessage";
import ChatList from "./components/ChatList/ChatList";
import Chat from "./components/Chat/Chat";


export const App = () => {
    const [messageList, setMessageList] = useState([]);
    const [chatList, setChatList] = useState([
        {id: 1, name: 'Main'},
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
        <div style={{display: 'flex', gap: '1rem'}}>
            <ChatList chats={chatList}/>
            <Chat messages={messageList} addMessage={addMessage} />
            {/*<div style={{width: '100%', paddingRight: '1rem'}}>*/}
            {/*    <div><h2>Chat Name</h2></div>*/}
            {/*    <MessageList messages={messageList}/>*/}
            {/*    <NewMessage addMessage={addMessage}/>*/}
            {/*</div>*/}
        </div>
    );
};

// export default App;