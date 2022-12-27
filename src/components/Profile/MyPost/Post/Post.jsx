import React  from 'react';
import s from './Post.module.css';

export default (props) => {
    return (
        <div>
            {props.message}
            <span>{props.likesCount} like</span>
        </div>
    );
}