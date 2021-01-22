import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/CreatePostReduser";
import Create_post from "./Create_post";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        newPost: () => {dispatch(addPostActionCreator())},
        updatePostText: (text) => {
            dispatch(updatePostTextActionCreator(text))},
    }
}

const Create_post_Container = connect(mapStateToProps,mapDispatchToProps)(Create_post)
export default Create_post_Container;