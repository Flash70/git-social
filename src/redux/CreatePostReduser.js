import {usersAPI} from "../api/api";


const type = 'ADD-POST';
const set_Users_Profile = 'set-Users-Profile'

let initialState = {
    postData: [
        {id: 1, message: 'Hi', likesCount: 20},
        {
            id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
                'nisi ut aliquip ex ea commodo consequat.', likesCount: 5
        },
        {id: 3, message: 'Yo', likesCount: 4},
        {id: 4, message: 'Yo Yo', likesCount: 7}
    ],
    profile: null,
}

const createPostReduser = (state = initialState, action) => {
    switch (action.type) {
        case type:
            let text = action.onPostChange;
            return {
                ...state,
                postData: [...state.postData, {id: 5, message: text, likesCount: 0}],
            }
        case set_Users_Profile:
            return {...state, profile: action.profile}
        default:
            return state;
    }
}
export const addPostActionCreator = (onPostChange) => ({type: type, onPostChange})
export const setUsersProfile = (profile) => ({type: set_Users_Profile, profile})

export const getUsersProfile = (userId) =>(dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUsersProfile(response.data))
        })
}

export default createPostReduser;