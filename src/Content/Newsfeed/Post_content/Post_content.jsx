import React from 'react';
import stail from './Post_content.module.css';
import {NavLink} from "react-router-dom";
import img from '../../../img/2.jpg'


const Post_content = (props) => {
    return (
        <div className={stail.container}>
            <div className={stail.post}>
                {/*<img className={stail.img_post} src={img} alt="post"/>*/}
                <div>
                    {props.message}
                </div>
            </div>
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}
export default Post_content;