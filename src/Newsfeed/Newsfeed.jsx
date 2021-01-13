import React from 'react';
import stail from './Newsfeed.module.css';
import {NavLink} from "react-router-dom";
import Create_post from "./Create_post/Create_post";
import Post_content from "./Post_content/Post_content";
import img from "../img/2.jpg"


const Newsfeed = () => {
    return (
        <div className={stail.container}>
            <Create_post />
            <Post_content likesCount='20'/>
            <Post_content message="Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat."
            likesCount='0'/>
        </div>
    )
}
export default Newsfeed;