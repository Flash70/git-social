import messagesPageReduser from "./messagesPageReduser";
import profilePageReduser from "./profilePageReduser";


let store = {
    _state: {
        profilePage: {
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
            newPostText: '',
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
            NewMessages: 'DDD',
        },
    },
    _renderEntireTree() {
        console.log('consol')
    },


    getState() {                                         //вызов store
        return this._state
    },
    subscribe(observer) {                                 // функция передает renderEntireTree из index.js позволяя
        this._renderEntireTree = observer;                // рендерить страницу
    },

    dispatch(action) {
        this._state.messagesPage = messagesPageReduser(this._state.messagesPage, action)
        this._state.profilePage = profilePageReduser(this._state.profilePage, action)
        this._renderEntireTree(this._state);

        // if (action.type === type) {
        //     let newPost = {                                                 //отправляет данные по клику
        //         id: 5,
        //         message: this._state.profilePage.newPostText,
        //         likesCount: 0,
        //     }
        //     this._state.profilePage.postData.push(newPost);
        //     this._state.profilePage.newPostText = '';
        //     this._renderEntireTree(this._state);
        // }
        // else if (action.type === type1) {                      // обновляет textarea при вводе данных
        //     this._state.profilePage.newPostText = action.newText;
        //     this._renderEntireTree(this._state);
        // }
        // else if (action.type === type2) {                       //отправляет данные по клику
        //     let NewMessages = {
        //         id: 5,
        //         message: this._state.messagesPage.NewMessages,
        //     }
        //     this._state.messagesPage.messagesData.push(NewMessages)
        //     this._state.messagesPage.NewMessages = '';
        //     this._renderEntireTree(this._state);
        // }
        // else if (action.type === type3) {                    // обновляет textarea при вводе данных
        //     this._state.messagesPage.NewMessages = action.newText;
        //     this._renderEntireTree(this._state);
        // }
    },
}





export default store;