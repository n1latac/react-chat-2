import React,{useState} from 'react';
import styles from './style.module.css';

const TextArea = (props) => {
    const [state, setState] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        props.addMessage(state);
        
    }

    const changeHandler = ({target:{value}}) => {
        setState(value)
    }
    return (
        <form className={styles.container} onSubmit={submitHandler}>
            <textarea 
            className={styles.textarea}
            value={state}
            onChange={changeHandler}/>
            <button 
            className={styles.buttonSubmit}>submit</button>
        </form>
    );
}

export default TextArea;
