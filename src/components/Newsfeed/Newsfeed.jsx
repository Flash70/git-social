import React from 'react';
import stail from './Newsfeed.module.css';
import Post_content from "./Post_content/Post_content";
import Create_post_Container from "./Create_post/Create_post_Container";
import MenuBar from "../Menu_Bar/MenuBar";



const Newsfeed = (props) => {

    let postsElements = props.profilePage.postData.map(posts => <Post_content message={posts.message}
                                                                        likesCount={posts.likesCount}/>)
    return (
        <div className={stail.container}>
            <div className={stail.menu_bar}>
                <MenuBar/>
                <div>
                    <Create_post_Container/>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default Newsfeed;