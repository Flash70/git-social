import React from 'react';
import stail from './Messages.module.css';
import DialogsFrindes from "./DialogsFriendes/DialogsFrindes";
import MessageFrindes from "./MessageFriendes/MessagesFrindes";

const Messages = (props) => {
    let state = props.messagesPage;

    let newSend = () => {
        props.addMessages();
    };
    let onMessagesChange = (event) => {
        let text = event.target.value;
        props.updateMessages(text);
    }
    debugger
    let friendsElements = state.friends.map(dialods => <DialogsFrindes name={dialods.name} key={dialods.id}
                                                                       id={dialods.id}/>);
    let messageElements = state.messagesData.map(message => <MessageFrindes message={message.message} key={message.id}/>);
    let NewMessagesElements = state.NewMessagesText

    return (
        <div className={stail.container}>
            <div className={stail.dialods}>
                {friendsElements}
            </div>
            <div className={stail.messages}>
                {messageElements}
                <textarea onChange={onMessagesChange} value={NewMessagesElements}
                          className={stail.form_control} name="texts" cols="30" rows="1"
                          placeholder="Write what you wish"/>
                <a className={stail.btn} href="#" onClick={newSend}>Send</a>
            </div>
        </div>
    )
}
export default Messages;