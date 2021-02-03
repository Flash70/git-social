import React from 'react';
import stail from './Create_post.module.css';
import img from '../../img/prof.jpg';
import {Field, reduxForm} from "redux-form";
import {requiredField, maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength30 = maxLengthCreator(30);


const Create_post = (props) => {
    let Publish = (values) => {                                   //вызывается при нажатии на кнопку
        props.newPost(values.onPostChange);
    };

    return (
        <div>
            <div className={stail.my_post}>
                <img className={stail.prof_photo} src={img} alt="user"/>
                <AddCreatePostFormRedux onSubmit={Publish}/>
            </div>
            <div>
                <hr/>
            </div>
        </div>

    )
}

const AddCreatePostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={stail.form}>
            <Field component={Textarea} name="onPostChange" validate={[requiredField, maxLength30]} placeholder="Write what you wish" className={stail.form_control}/>
            <button className={stail.btn}>Publish</button>
        </form>
    )
}
const AddCreatePostFormRedux = reduxForm ({form:"addCreatePostForm"}) (AddCreatePostForm)
export default Create_post;