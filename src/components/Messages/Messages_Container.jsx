import {addMessagesActionCreator, updateMessagesTextActionCreator} from "../../redux/messagesPageReduser";
import Messages from "./Messages";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessages: () => {dispatch(addMessagesActionCreator())},
        updateMessages: (text) => {dispatch(updateMessagesTextActionCreator(text))},
    }
}
let AuthRedirectComponent = withAuthRedirect(Messages);

const Messages_Container = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent)

export default Messages_Container;