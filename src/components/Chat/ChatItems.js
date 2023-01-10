import React from 'react';
import styles from './style.module.css';
import classNames from 'classnames/bind'

let cx = classNames.bind(styles);

const ChatItems = (props) => {
    const {body, user, id}=props.msg;
    let className = cx({
        user: !id,
        visitors: id
    })
    let userMesage = cx({
        chatMessage: id,
        userChatMessage: !id
    })
   
    console.log(className);
    return (
        
            <div className={className}>
                <img 
                className={styles.userImg}
                src={user.userAvatar ? user.userAvatar : './images/userAvatar.jpg'}></img>
                <div className={userMesage}>
                    <p>{user.username}</p>
                    <p>{body}</p>
                </div>
            </div>
        
    );
}

export default ChatItems;
