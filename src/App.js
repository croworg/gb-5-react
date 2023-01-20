import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor} from './store'

import {firebaseAuth, messagesRef} from "./services/firebase";
import {onValue} from 'firebase/database';
import {auth} from "./store/profile/actions";
import {PublicRoute} from "./utils/PublicRoute";
import {PrivateRoute} from "./utils/PrivateRoute";

import {NavBar} from './components/NavBar/NavBar';
import {ChatsList} from "./components/ChatList/ChatsList";
import {MainPage} from './Pages/MainPage';
import {ProfilePage} from './Pages/ProfilePage';
import {ChatsPage} from './Pages/ChatsPage';
import {AboutWithConnect} from "./Pages/AboutPage";
import Nobel from "./Pages/Nobel";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

/*
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
*/

const App = () => {
    const dispatch = useDispatch();

    const [messagesDB, setMessagesDB] = useState({});
    const [chats, setChats] = useState([]);
    // const [chats, setChats] = useState(defaultMessages);

    /*const chatsList = Object.keys(chats).map((chat) => ({
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
    */

    useEffect(() => {
        return firebaseAuth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(auth(true));
            } else {
                dispatch(auth(false));
            }
        });
    }, []);

    useEffect(() => {
        onValue(messagesRef, (snapshot) => {
            const data = snapshot.val();

            const newChats = Object.entries(data).map(item => ({
                name: item[0],
                messages: item[1].messageList
            }))

            setMessagesDB(data);
            setChats(newChats);
        })
    }, []);

    return (
        <PersistGate persistor={persistor}>
            <div className='wrapper'>
                <Routes>
                    <Route path='/' element={<NavBar/>}>
                        <Route index element={<MainPage/>}/>
                        <Route path='profile' element={<ProfilePage/>}/>
                        <Route path={'chats'} element={<PrivateRoute/>}>
                            <Route index element={<ChatsList
                                chats={chats}
                                messagesDB={messagesDB}
                            />}/>
                            <Route path={':chatId'} element={<ChatsPage
                                chats={chats}
                                messagesDB={messagesDB}
                            />}/>
                        </Route>
                        <Route path='about' element={<AboutWithConnect/>}/>
                        <Route path='nobel' element={<Nobel/>}/>
                        <Route path='signin' element={<PublicRoute component={<SignIn/>}/>}/>
                        <Route path='signup' element={<SignUp/>}/>
                    </Route>

                    <Route path={'*'} element={<p>404 Page Not Found</p>}/>
                </Routes>
            </div>
        </PersistGate>
    );
};

export default App;