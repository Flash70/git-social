import React from 'react';
import stail from './MenuBar.module.css';
import {NavLink} from "react-router-dom";
import Profile_card from "./Profile_Card/profile_card";


const MenuBar = () => {
    return (
        <div>
            <Profile_card/>
            <div className={stail.menu_bar}>
                <ul className={stail.menu}>
                    <li className={stail.menu_link}>
                        <NavLink to='/newsfeed' activeClassName={stail.activLink}>My Newsfeed</NavLink>
                    </li>
                    <li className={stail.menu_link}>
                        <NavLink to='/friends' activeClassName={stail.activLink}>Friends</NavLink>
                    </li>
                    <li className={stail.menu_link}>
                        <NavLink to='/messages' activeClassName={stail.activLink}>Messages</NavLink>
                    </li>
                    <li className={stail.menu_link}>
                        <NavLink to='/images' activeClassName={stail.activLink}>Images</NavLink>
                    </li>
                    <li className={stail.menu_link}>
                        <NavLink to='/videos' activeClassName={stail.activLink}>Videos</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default MenuBar;