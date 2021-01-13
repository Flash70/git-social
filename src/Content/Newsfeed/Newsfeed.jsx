import React from 'react';
import stail from './Newsfeed.module.css';
import Create_post from "./Create_post/Create_post";
import Post_content from "./Post_content/Post_content";


const Newsfeed = (props) => {
    let postsElements = props.posts.postData.map(posts => <Post_content message={posts.message}
                                                                        likesCount={posts.likesCount}/>)
    return (
        <div className={stail.container}>
            <Create_post addPost={props.addPost}/>
            {postsElements}
        </div>
    )
}
export default Newsfeed;