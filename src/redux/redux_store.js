import {combineReducers, createStore} from "redux";
import messagesPageReduser from "./messagesPageReduser";
import createPostReduser from "./CreatePostReduser";
import friendsReduser from "./FriendsReduser";
import authReduser from "./auth-reduser";



let reducers = combineReducers({
    messagesPage: messagesPageReduser,
    profilePage: createPostReduser,
    friendsPage: friendsReduser,
    auth: authReduser,
})

let store = createStore(reducers);

export default store