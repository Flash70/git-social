import React from 'react';
import stail from './Newsfeed.module.css';
import Create_post from "./Create_post/Create_post";
import Post_content from "./Post_content/Post_content";


const Newsfeed = (props) => {
    let postsElements = props.newsfeedPage.postData.map(posts => <Post_content message={posts.message}
                                                                               likesCount={posts.likesCount}/>)
    return (
        <div className={stail.container}>
            <Create_post newPostText={props.newsfeedPage.newPostText} dispatch={props.dispatch}/>
            {postsElements}
        </div>
    )
}
export default Newsfeed;