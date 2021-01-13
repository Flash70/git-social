import React from 'react';
import stail from './Messages.module.css';
import DialogsFrindes from "./DialogsFrindes/DialogsFrindes";
import MessageFrindes from "./MessageFrindes/MessagesFrindes";

const Messages = (props) => {
    let newPostElement = React.createRef ();
    let Publish = () => {
        let text = newPostElement.current.value;
        alert(text)
    };
    let friendsElements = props.messages.friends.map(dialods => <DialogsFrindes name={dialods.name} id={dialods.id}/>);
    let messageElements = props.messages.messagesData.map(message => <MessageFrindes message={message.message}/>);
    return (
        <div className={stail.container}>
            <div className={stail.dialods}>
                {friendsElements}
            </div>
            <div className={stail.messages}>
                {messageElements}
                <textarea className={stail.form_control} name="texts" ref={newPostElement} cols="30" rows="1" placeholder="Write what you wish"></textarea>
                <a className={stail.btn} href="#" onClick={Publish}>Send</a>
            </div>
        </div>
    )
}
export default Messages;