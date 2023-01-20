import {ChatsList} from '../components/ChatList/ChatsList';
import {Chat} from '../components/Chat/Chat';

export const ChatsPage = ({chats, messagesDB}) => {
    return (
        <div style={{
            display: 'flex',
            height: '100%',
            overflow: 'hidden',
            // gap: '.2rem'
        }}>
            <ChatsList messagesDB={messagesDB}/>
            <Chat
                chats={chats}
                messagesDB={messagesDB}
            />
        </div>
    );
};