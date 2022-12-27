import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';

const setActive = navData => navData.isActive ? s.active : null;

export default () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/Profile' className = {setActive}>
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Dialogs' className = {setActive}>
                    Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Users' className = {setActive}>
                    Users
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/News' className = {setActive}>
                    News
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Music' className = {setActive}>
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Settings' className = {setActive}>
                    Settings
                </NavLink>
            </div>
        </nav>
    )
}