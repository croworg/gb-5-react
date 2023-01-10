import {ChatsList} from '../components/ChatList/ChatsList';
import {Chat} from '../components/Chat/Chat';

export const ChatsPage = (props) => {
    return (
        <div style={{
            display: 'flex',
            height: '100%',
            overflow: 'hidden'
        }}>
            <ChatsList />
            <Chat />
        </div>
    );
};