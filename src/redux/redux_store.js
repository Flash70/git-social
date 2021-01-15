import {combineReducers, createStore} from "redux";
import messagesPageReduser from "./messagesPageReduser";
import profilePageReduser from "./profilePageReduser";



let reducers = combineReducers({
    messagesPage: messagesPageReduser,
    profilePage: profilePageReduser,
})

let store = createStore(reducers);

export default store