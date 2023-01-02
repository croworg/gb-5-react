import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {nanoid} from 'nanoid';

import NavBar from './components/NavBar/NavBar';
import MainPage from './Pages/MainPage';
import ProfilePage from './Pages/ProfilePage';
import ChatsPage from './Pages/ChatsPage';
import {ChatsList} from "./components/ChatList/ChatsList";
import shadows from "@mui/material/styles/shadows";


const defaultMessages = {
    support: [
        {
            author: 'user',
            text: 'Welcome! We glad to see you here!'
        },
        {
            author: 'user',
            text: 'Message two'
        }
    ]
};

const App = () => {
    console.log(defaultMessages);
    const [chats, setChats] = useState(defaultMessages);

    const chatsList = Object.keys(chats).map((chat) => ({
        id: nanoid(),
        name: chat
    }));

    const onAddChat = (newChat) => {
        setChats({
            ...chats,
            [newChat.name]: []
        })
    };

    const onAddMessage = text => {
        console.log('message text', text);
    }

    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Routes>
                    <Route path='/' element={<NavBar/>}>
                        <Route index element={<MainPage/>}/>
                        <Route path='profile' element={<ProfilePage/>}/>
                        <Route path={'chats'}>
                            <Route
                                index
                                element={<ChatsList chats={chatsList} />}
                                onAddChat={onAddChat}
                            />
                            <Route
                                path={':chatId'}
                                element={<ChatsPage
                                    chats={chatsList}
                                    onAddMessage={onAddMessage}
                                    onAddChat={onAddChat}
                                />}
                            />
                        </Route>
                        <Route path={'*'} element={<p>404 Page Not Found</p>}/>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;