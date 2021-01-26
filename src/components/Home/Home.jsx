import React from 'react';
import stail from './Home.module.css';
import Post_content from "../Newsfeed/Post_content/Post_content";
import Create_post_Container from "../Newsfeed/Create_post/Create_post_Container";
import ProFileContainer from "./Profile/ProFileContainer";
import {Redirect} from "react-router-dom";


const Home = (props) => {

    let postsElements = props.profilePage.postData.map(posts => <Post_content message={posts.message}
                                                                              likesCount={posts.likesCount}/>)
    return (
        <div className={stail.container}>
            <ProFileContainer/>
            <div className={stail.createPost}>
                <Create_post_Container/>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default Home;