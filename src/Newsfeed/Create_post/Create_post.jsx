import React from 'react';
import stail from './Create_post.module.css';
import img from '../../img/prof.jpg';
import {NavLink} from "react-router-dom";


const Create_post = () => {
    return (
        <div>
            <div className={stail.my_post}>
                <img className={stail.prof_photo} src={img} alt="user"/>
                <textarea className={stail.form_control} name="texts" id="exampleTextarea" cols="30" rows="1">Write what you wish</textarea>
                <a className={stail.btn} href="#">Publish</a>
            </div>
            <div><hr/></div>
        </div>

    )
}
export default Create_post;