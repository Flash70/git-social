import {addMessagesActionCreator, updateMessagesTextActionCreator} from "../../redux/messagesPageReduser";
import Messages from "./Messages";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


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


export default compose(connect(mapStateToProps,mapDispatchToProps), withAuthRedirect)(Messages);