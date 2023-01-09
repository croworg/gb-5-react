import {Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {useState} from 'react';
import {PersistGate} from "redux-persist/integration/react";
import {nanoid} from 'nanoid';

import {persistor, store} from './store'

import {NavBar} from './components/NavBar/NavBar';
import {MainPage} from './Pages/MainPage';
import {ProfilePage} from './Pages/ProfilePage';
import {ChatsPage} from './Pages/ChatsPage';
import {ChatsList} from "./components/ChatList/ChatsList";
import {AboutWithConnect} from "./Pages/AboutPage";

const defaultMessages = {
    Support: [
        {
            author: 'user',
            text: 'Welcome! We glad to see you here!'
        },
        {
            author: 'user',
            text: 'Message'
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
            <PersistGate persistor={persistor}>
                <div className='wrapper'>
                    <Routes>
                        <Route path='/' element={<NavBar/>}>
                            <Route index element={<MainPage/>}/>
                            <Route path='profile' element={<ProfilePage/>}/>
                            <Route path={'chats'}>
                                <Route index element={<ChatsList/>}/>
                                <Route path={':chatId'} element={<ChatsPage/>}/>
                            </Route>
                            <Route path='about' element={<AboutWithConnect/>}/>
                            <Route path={'*'} element={<p>404 Page Not Found</p>}/>
                        </Route>
                    </Routes>
                </div>
            </PersistGate>
        </Provider>
    );
};

export default App;