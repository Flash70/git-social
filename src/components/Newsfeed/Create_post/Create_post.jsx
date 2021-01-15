import React from 'react';
import stail from './Create_post.module.css';
import img from '../../img/prof.jpg';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/state";

const Create_post = (props) => {
    let newPostElement = React.createRef();        // ссылка на textarea через ref

    let Publish = () => {                            //вызывается при нажатии на кнопку
        props.dispatch(addPostActionCreator ())
    };
    let onPostChange = () => {                         //ВЫЗЫВАЕТСЯ КОГДА МЕНЯЕТСЯ textarea
        let text = newPostElement.current.value;
        //props.dispatch({type: 'UPDATE-POST-TEXT', newText: text});
        // let action = {type: 'UPDATE-POST-TEXT', newText: text};
        let action = updatePostTextActionCreator (text);
        props.dispatch(action);
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