import {combineReducers, createStore} from "redux";
import messagesPageReduser from "./messagesPageReduser";
import createPostReduser from "./CreatePostReduser";
import friendsReduser from "./FriendsReduser";



let reducers = combineReducers({
    messagesPage: messagesPageReduser,
    profilePage: createPostReduser,
    friendsPage: friendsReduser,
})

let store = createStore(reducers);

export default store