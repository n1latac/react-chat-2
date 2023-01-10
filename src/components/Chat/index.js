import React from 'react';
import ChatItems from './ChatItems';

const Chat = (props) => {
    
    
    const messageArray = props.chatState.map((msg)=>{
        return <ChatItems msg={msg}/>
        
    })
    return (
        <div>
            {messageArray}
        </div>
    );
}

export default Chat;
