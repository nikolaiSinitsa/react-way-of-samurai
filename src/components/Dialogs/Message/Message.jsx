import React  from 'react';
import s from './Message.module.css';

export default (props) => {
    
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}
