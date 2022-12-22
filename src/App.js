import React from 'react';
import Message from './components/Message/Message';

const text = 'Текст сообщения';

const App = () => {
    return (
        <>
            <Message text={text} />
        </>
    );
};

export default App;