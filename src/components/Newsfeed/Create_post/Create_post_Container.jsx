import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/CreatePostReduser";
import Create_post from "./Create_post";
import {connect} from "react-redux";


// const Create_post_Containerr = () => {
//
//
//     return <StoreContext.Consumer>
//         {(store) => {
//             let state = store.getState()
//             let Publish = () => {                                     //вызывается при нажатии на кнопку
//                 store.dispatch(addPostActionCreator())
//             };
//
//             let onPostChange = (text) => {                         //ВЫЗЫВАЕТСЯ КОГДА МЕНЯЕТСЯ textarea
//                 //let action = updatePostTextActionCreator(text);
//                 store.dispatch(updatePostTextActionCreator(text));
//             }
//             return ( <Create_post updatePostText={onPostChange} newPost={Publish}
//                                 newPostText={state.profilePage.newPostText}/>)
//         }
//         }
//     </StoreContext.Consumer>
// }

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