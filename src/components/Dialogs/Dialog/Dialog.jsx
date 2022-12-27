import React  from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';


export default (props) => {
    const path = `${props.id}`; 
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}