import React from 'react';
import stail from './Create_post.module.css';
import img from '../../../img/prof.jpg';


const Create_post = (props) => {
    let newPostElement = React.createRef ();
    let Publish = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    };
    return (
        <div>
            <div className={stail.my_post}>
                <img className={stail.prof_photo} src={img} alt="user"/>
                <textarea className={stail.form_control} name="texts" ref={newPostElement} cols="30" rows="1" placeholder="Write what you wish"></textarea>
                <a className={stail.btn} href="#" onClick={Publish}>Publish</a>
            </div>
            <div><hr/></div>
        </div>

    )
}
export default Create_post;