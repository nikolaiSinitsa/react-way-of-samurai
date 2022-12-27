import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

export default ({
                    users, currentPage, onPageChanged, followingInProgress, pageSize, totalUsersCount, unfollow, follow
                }) => {
    return <div>
        <Paginator totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   onPageChanged={onPageChanged}/>
        {users.map(u => <User key={u.id}
                              follow={follow}
                              unfollow={unfollow}
                              followingInProgress={followingInProgress}
                              user={u}/>)}
    </div>
}