import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

export default ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (<div>
        <div className={s.description}>
            <img src={profile.photos.large}/>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>)
}