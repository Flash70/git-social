const type = 'ADD-POST';
const type1 = 'UPDATE-POST-TEXT';
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
    newPostText: '',
    profile: null,
}

const createPostReduser = (state = initialState, action) => {
    switch (action.type) {
        case type:
            let text = state.newPostText;
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, {id: 5, message: text, likesCount: 0}],
            }
        case type1:                                // обновляет textarea при вводе данных
            return {...state, newPostText: action.newText}
        case set_Users_Profile:                                // обновляет textarea при вводе данных
            return {...state, profile: action.profile}
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: type})
export const setUsersProfile = (profile) => ({type: set_Users_Profile, profile})
export const updatePostTextActionCreator = (text) => ({type: type1, newText: text})

export default createPostReduser;