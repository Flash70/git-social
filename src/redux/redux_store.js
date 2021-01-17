import {combineReducers, createStore} from "redux";
import messagesPageReduser from "./messagesPageReduser";
import createPostReduser from "./CreatePostReduser";



let reducers = combineReducers({
    messagesPage: messagesPageReduser,
    profilePage: createPostReduser,
})

let store = createStore(reducers);

export default store