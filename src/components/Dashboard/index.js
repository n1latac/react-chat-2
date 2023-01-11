import React,{useState,useEffect,useReducer} from 'react';
import DialogList from '../DialogList';
import Chat from '../Chat';
import TextArea from '../TextArea';
import styles from './style.module.css';
import { getData } from '../../api';
import { UserContext } from '../../contexts';
import { CONSTANTS } from '../../CONSTANTS';
const {ACTIONS} = CONSTANTS;

const Dashboard = (props) => {
    const [user, setUser] = useState({
        id: 0,
        username: 'Vlad',
        userAvatar: './images/userImage.jpg',
    })

    function reducer(state, action){
        switch(action.type){
            case ACTIONS.DATA_LOAD_ACCESS:
                return {
                    ...state,
                    messages:action.data.comments
                }
            case ACTIONS.ERROR_DATA_ACCESS:
                return {
                    ...state,
                    error: action.error
                }
                case ACTIONS.ADD_MESSAGE:
                    const {data} = action;
                    const resultState = [
                        ...state.messages,
                        data
                    ]
                    return{
                        ...state,
                        messages: resultState
                    }
            default:
                    return state
        }

    }

    const [chatState, dispatch] = useReducer(reducer,{
        messages: [],
    })



    


    useEffect(()=>{
        getData()
        .then((data)=>{
            dispatch({
                type: ACTIONS.DATA_LOAD_ACCESS,
                data
            })
        })
        .catch((error)=>{
            dispatch({
                type: ACTIONS.ERROR_DATA_ACCESS,
                error,
            })
        });
        
           scroll();
        
    },[])

    const scroll = () =>{
        const chat = document.getElementById('chat')
            console.dir(chat);
            
        chat.scrollTo({ 
          top: chat.scrollHeight,
          block: 'start',
          behavior: 'smooth'
        })
    }

    
    function addMessage(text){
        const message = {
            body:text,
            user
        }
      dispatch({
         type: ACTIONS.ADD_MESSAGE,
         data:message
      })
    }

    return (
        <UserContext.Provider value={user}>
        <main className={styles.wrapper}>
            <DialogList/>
            <section className={styles.wrapperChat} id='chat'>
            <Chat chatState={chatState.messages}/>
            <TextArea addMessage={addMessage}/>
            </section>
           
        </main>
         </UserContext.Provider>
    );
}

export default Dashboard;
