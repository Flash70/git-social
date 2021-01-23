import React from 'react';
import stail from './UsersFriends.module.css';
import img_card from '../../../img/1.jpg'
import userPhoto from '../../../img/4.jpg'
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let UsersFriends = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div className={stail.content}>
        <div>
            {pages.map(page => {
                return <span className={props.currentPage === page && stail.selectedP} onClick={() => {
                    props.onPageChanged(page)
                }}>{page}</span>
            })}
        </div>
        {
            props.users.map(user =>
                <div className={stail.container} key={user.id}>
                    <div className={stail.friend_card}>
                        <img src={img_card} alt="profile-cover" className={stail.img_responsive}/>
                    </div>
                    <div className={stail.card_info}>
                        <NavLink to={'/home/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="user"
                                 className={stail.profile_photo_lg}/>
                        </NavLink>
                    </div>
                    <div className={stail.friend_info}>
                        {user.followed ?
                            <a disabled={props.followingInProgress.some( id => id === user.id )} className={stail.pull_right} onClick={() => {
                                props.toggleFollowingProgress(true, user.id);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${user.id}`, {
                                    withCredentials: true,
                                    headers: {"API-KEY": "ef985269-a9ea-44ef-8f52-1417dfebe658"}
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(user.id)
                                        }
                                        props.toggleFollowingProgress(false, user.id);
                                    })
                            }}>My Friend</a> :
                            <a disabled={props.followingInProgress.some( id => id === user.id )} className={stail.pull_right} onClick={() => {
                                props.toggleFollowingProgress(true, user.id);
                                axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${user.id}`, {}, {
                                    withCredentials: true,
                                    headers: {"API-KEY": "ef985269-a9ea-44ef-8f52-1417dfebe658"}
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(user.id)
                                        }
                                        props.toggleFollowingProgress(false, user.id);
                                    })
                            }}>Add Friend</a>}
                        <h4><a href="#" className={stail.profile_link}>{user.name}</a></h4>
                        <p>Student at Harvard</p>
                    </div>
                </div>)}

    </div>
}

export default UsersFriends;