import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import MainPage from './Pages/MainPage';
import Profile from './Pages/Profile';
import ChatsPage from './Pages/ChatsPage';


const App = () => {
    const [chatsList, setChatsList] = useState([]);

    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Routes>
                    <Route path='/' element={<NavBar/>}>
                        <Route index element={<MainPage/>}/>
                        <Route path='profile' element={<Profile/>}/>
                        <Route path={'chats'}>
                            <Route index element={<ChatsPage/>}/>
                            <Route path={':chatId'} element={<ChatsPage chat={''}/>}/>
                        </Route>
                        <Route path={'*'} element={<p>404 Page Not Found</p>}/>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;