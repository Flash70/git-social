import React from 'react';
import stail from './Messages.module.css';
import DialogsFrindes from "./DialogsFrindes/DialogsFrindes";
import MessageFrindes from "./MessageFrindes/MessagesFrindes";
import {sendMessageCreator, updateMessageTextCreator} from "../../redux/state";

const Messages = (props) => {
    let state = props.store.getState().messagesPage
    let newPostElement = React.createRef();
    let Send = () => {
        props.store.dispatch(sendMessageCreator());

    };
    let onSendChange = (event) => {
        let newSend = event.target.value;
        props.store.dispatch(updateMessageTextCreator(newSend));
    };


    let friendsElements = state.friends. map(dialods => <DialogsFrindes name={dialods.name} id={dialods.id}/>);
    let messageElements = state.messagesData.map(message => <MessageFrindes message={message.message}/>);
    let newMassagesText = state.newMassagesText;

    return (
        <div className={stail.container}>
            <div className={stail.dialods}>
                {friendsElements}
            </div>
            <div className={stail.messages}>
                {messageElements}
                <textarea value={newMassagesText} onChange={onSendChange} className={stail.form_control} name="texts" ref={newPostElement}
                          cols="30" rows="1" placeholder="Write what you wish"/>
                <a className={stail.btn} href="#" onClick={Send}>Send</a>
            </div>
        </div>
    )
}
export default Messages;