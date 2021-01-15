const type = 'ADD-POST';
const type1 = 'UPDATE-POST-TEXT';

let initialState = {
        postData: [
            {id: 1, message: 'Hi', likesCount: 20},
            {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
                    'nisi ut aliquip ex ea commodo consequat.', likesCount: 5
            },
            {id: 3, message: 'Yo', likesCount: 4},
            {id: 4, message: 'Yo', likesCount: 7}
        ],
        newPostText: '',
    }

const profilePageReduser = (state = initialState, action) => {
    switch (action.type) {
        case type:
            let newPost = {                                                 //отправляет данные по клику
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case type1: // обновляет textarea при вводе данных
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: type})

export const updatePostTextActionCreator = (text) => {
    return {
        type: type1,
        newText: text
    }
}
export default profilePageReduser;