import React from 'react';
import stail from './Create_post.module.css';
import img from '../../../img/prof.jpg';
import {addPostActionCreator, updatePostTextCreator} from "../../../redux/state";



const Create_post = (props) => {
    let newPostElement = React.createRef();

    let Publish = () => {
        props.dispatch(addPostActionCreator())
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let newVar = updatePostTextCreator(text)
        props.dispatch (newVar);
    }
    return (
        <div>
            <div className={stail.my_post}>
                <img className={stail.prof_photo} src={img} alt="user"/>
                <textarea onChange={onPostChange} className={stail.form_control} name="texts" ref={newPostElement}
                          cols="30" rows="1"
                          placeholder="Write what you wish" value={props.newPostText}/>
                <a className={stail.btn} href="#" onClick={Publish}>Publish</a>
            </div>
            <div>
                <hr/>
            </div>
        </div>

    )
}
export default Create_post;