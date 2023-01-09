import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {nanoid} from 'nanoid';

import NavBar from './components/NavBar/NavBar';
import MainPage from './Pages/MainPage';
import ProfilePage from './Pages/ProfilePage';
import ChatsPage from './Pages/ChatsPage';
import {ChatsList} from "./components/ChatList/ChatsList";
import {Provider} from "react-redux";
import {store} from './store'


const defaultMessages = {
    Support: [
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
    };

    return (
        <Provider store={store}>
            <div className='wrapper'>
                <Routes>
                    <Route path='/' element={<NavBar/>}>
                        <Route index element={<MainPage/>}/>
                        <Route path='profile' element={<ProfilePage/>}/>
                        <Route path={'chats'}>
                            <Route index element={<ChatsList />} />
                            <Route path={':chatId'} element={<ChatsPage />}/>
                        </Route>
                        <Route path={'*'} element={<p>404 Page Not Found</p>}/>
                    </Route>
                </Routes>
            </div>
        </Provider>
    );
};

export default App;