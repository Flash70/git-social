import {applyMiddleware, combineReducers, createStore} from "redux";
import messagesPageReduser from "./messagesPageReduser";
import createPostReduser from "./CreatePostReduser";
import friendsReduser from "./FriendsReduser";
import authReduser from "./auth-reduser";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    messagesPage: messagesPageReduser,
    profilePage: createPostReduser,
    friendsPage: friendsReduser,
    auth: authReduser,
    form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store