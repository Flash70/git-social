import {addMessagesActionCreator, updateMessagesTextActionCreator} from "../../redux/messagesPageReduser";
import Messages from "./Messages";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessages: () => {dispatch(addMessagesActionCreator())},
        updateMessages: (text) => {dispatch(updateMessagesTextActionCreator(text))},
    }
}

const Messages_Container = connect(mapStateToProps,mapDispatchToProps)(Messages)

export default Messages_Container;