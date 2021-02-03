import {addPostActionCreator} from "../../../redux/CreatePostReduser";
import Create_post from "./Create_post";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        newPost: (onPostChange) => {dispatch(addPostActionCreator(onPostChange))},
    }
}

const Create_post_Container = connect(mapStateToProps,mapDispatchToProps)(Create_post)
export default Create_post_Container;