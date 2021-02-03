import React from 'react';
import stail from './Messages.module.css';
import DialogsFrindes from "./DialogsFriendes/DialogsFrindes";
import MessageFrindes from "./MessageFriendes/MessagesFrindes";
import MenuBar from "../Menu_Bar/MenuBar";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const maxLength30 = maxLengthCreator(30);

const Messages = (props) => {


    let state = props.messagesPage;

    let addNewMessage = (values) => {
        props.addMessages(values.newMessagesElements);
    }
    let friendsElements = state.friends.map(dialods => <DialogsFrindes name={dialods.name} key={dialods.id}
                                                                       id={dialods.id}/>);
    let messageElements = state.messagesData.map(message => <MessageFrindes message={message.message}
                                                                            key={message.id}/>);


    return (
        <div className={stail.container}>
            <div className={stail.menu_bar}>
                <MenuBar/>
                <div className={stail.dmessages}>
                    <div className={stail.dialods}>
                        {friendsElements}
                    </div>
                    <div className={stail.messages}>
                        {messageElements}
                        <AddMessageFormRedux onSubmit={addNewMessage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[requiredField,maxLength30]} name="newMessagesElements" placeholder="Write what you wish" className={stail.form_control}/>
                      <button className={stail.btn}>Send</button>
        </form>
    )
}
const AddMessageFormRedux = reduxForm ({form: "dialogAddMessageForm"}) (AddMessageForm)
export default Messages;