let state = {
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
    },
}
export let addPost = (postMessages) => {
    let newPost = {
        id:5,
        message: postMessages,
        likesCount: 0,
    }
    state.profilePage.postData.push(newPost);
}
export default state;