import React from 'react';
import stail from './Newsfeed.module.css';
import Post_content from "./Post_content/Post_content";
import Create_post_Container from "./Create_post/Create_post_Container";



const Newsfeed = (props) => {

    let postsElements = props.profilePage.postData.map(posts => <Post_content message={posts.message}
                                                                        likesCount={posts.likesCount}/>)
    return (
        <div className={stail.container}>
            <Create_post_Container/>
            {postsElements}
        </div>
    )
}

export default Newsfeed;