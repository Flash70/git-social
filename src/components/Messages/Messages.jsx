import React from 'react';
import stail from './Messages.module.css';
import DialogsFrindes from "./DialogsFriendes/DialogsFrindes";
import MessageFrindes from "./MessageFriendes/MessagesFrindes";
import {addMessagesActionCreator, updateMessagesTextActionCreator} from "../../redux/messagesPageReduser";


const Messages = (props) => {
    //let newMessagesElement = React.createRef();

    let newSend = () => {
        props.dispatch(addMessagesActionCreator())
    };
    let onMessagesChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateMessagesTextActionCreator(text))
    }
debugger
    let friendsElements = props.messagesPage.friends.map(dialods => <DialogsFrindes name={dialods.name}
                                                                                    id={dialods.id}/>);
    let messageElements = props.messagesPage.messagesData.map(message => <MessageFrindes message={message.message}/>);

    return (
        <div className={stail.container}>
            <div className={stail.dialods}>
                {friendsElements}
            </div>
            <div className={stail.messages}>
                {messageElements}
                <textarea onChange={onMessagesChange} value={props.messagesPage.NewMessages}
                          className={stail.form_control} name="texts" cols="30" rows="1"
                          placeholder="Write what you wish"/>
                <a className={stail.btn} href="#" onClick={newSend}>Send</a>
            </div>
        </div>
    )
}
export default Messages;