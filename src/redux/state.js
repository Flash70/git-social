const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const UPDATE_MASSAGE_TEXT = 'UPDATE-MASSAGE-TEXT'
const SEND_MASSAGE = 'SEND-MASSAGE'

let store = {
    _state: {
        newsfeedPage: {
            postData: [
                {id: 1, message: 'Hi', likesCount: 20},
                {
                    id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
                        'nisi ut aliquip ex ea commodo consequat.', likesCount: 5
                },
                {id: 3, message: 'Yo', likesCount: 4},
                {id: 4, message: 'Yo', likesCount: 7}
            ],
            newPostText: 'Hello'
        },
        messagesPage: {
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your drink?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'}
            ],
            friends: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Marina'},
                {id: 3, name: 'Roma'},
                {id: 4, name: 'Juliana'},
            ],
            newMassagesText: ''
        },
    },
    _callSubscriber() {
        console.log('Helloy')
    },

    getState() {
        return this._state;
    },
    subscride(observer) {
        this._callSubscriber = observer;
    },

    // _addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.newsfeedPage.newPostText,
    //         likesCount: 0,
    //     }
    //     this._state.newsfeedPage.postData.push(newPost);
    //     this._state.newsfeedPage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // _updatePostText(newText) {
    //     this._state.newsfeedPage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },

    dispatch (action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.newsfeedPage.newPostText,
                likesCount: 0,
            }
            this._state.newsfeedPage.postData.push(newPost);
            this._state.newsfeedPage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_POST_TEXT) {
            this._state.newsfeedPage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else  if (action.type === UPDATE_MASSAGE_TEXT) {
            this._state.messagesPage.newMassagesText = action.newSend
            this._callSubscriber(this._state);
        }
        else  if (action.type === SEND_MASSAGE) {
            let body = this._state.messagesPage.newMassagesText;
            this._state.messagesPage.newMassagesText = '';
            this._state.messagesPage.messagesData.push({id: 5, message: body});
            this._callSubscriber(this._state);
        }
    }
}
export const addPostActionCreator = () => ({type: ADD_POST })
export const updatePostTextCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text})
export const sendMessageCreator = () => ({type: SEND_MASSAGE })
export const updateMessageTextCreator = (text) => ({type: UPDATE_MASSAGE_TEXT, newSend: text})

window.store = store;
export default store;