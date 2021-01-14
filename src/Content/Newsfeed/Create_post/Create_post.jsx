import React from 'react';
import stail from './Create_post.module.css';
import img from '../../../img/prof.jpg';


const Create_post = (props) => {
    let newPostElement = React.createRef();

    let Publish = () => {
        props.addPost()
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updatePostText (text);
    }
    return (
        <div>
            <div className={stail.my_post}>
                <img className={stail.prof_photo} src={img} alt="user"/>
                <textarea onChange={onPostChange} value={props.profilePage.newPostText} className={stail.form_control}
                          name="texts"
                          ref={newPostElement} cols="30" rows="1"
                          placeholder="Write what you wish"/>
                <a className={stail.btn} href="#" onClick={Publish}>Publish</a>
            </div>
            <div>
                <hr/>
            </div>
        </div>

    )
}
export default Create_post;