import React from 'react';
import stail from './MenuBar.module.css';
import {NavLink} from "react-router-dom";
import Profile_card from "./Profile_Card/profile_card";


const MenuBar = () => {
    return (
        <div>
            <Profile_card />
            <div className={stail.menu_bar}>
                <ul className={stail.menu}>
                    <li className={stail.menu_link}>
                         <a href='#'>My Newsfeed</a>
                    </li>
                    <li className={stail.menu_link}>
                        <a href='#'>Friends</a>
                    </li>
                    <li className={stail.menu_link}>
                        <a href='#'>Messages</a>
                    </li>
                    <li className={stail.menu_link}>
                        <a href='#'>Images</a>
                    </li>
                    <li className={stail.menu_link}>
                        <a href='#'>Videos</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default MenuBar;