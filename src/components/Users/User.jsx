import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user-default.png";
import {NavLink} from "react-router-dom";

export default ({user, followingInProgress, unfollow, follow}) => {
    return (<div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed ?
                            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                unfollow(user.id)
                            }}>Unfollow</button> :
                            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id)
                            }}>Follow</button>}

                    </div>
                </span>
        <span>
                    <div>
                        {user.name}
                    </div>

                    <div>
                        {user.status}
                    </div>
        </span>
    </div>)
}