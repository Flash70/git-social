import React from 'react';
import stail from './Friends.module.css';
import UsersFriendsContainer from "./Users/UsersFriendsContainer";
import MenuBar from "../../Menu_Bar/MenuBar";


const Friends = () => {
    return (
        <div className={stail.container}>
            <div className={stail.menu_bar}>
                <MenuBar/>
                <div className={stail.contain}>
                    <div className={stail.userfriends}>
                        <UsersFriendsContainer/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Friends;