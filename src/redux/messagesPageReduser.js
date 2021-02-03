const type2 = 'ADD-NEW-MESSAGES';

let initialState = {
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your drink?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'}
    ],
    friends: [
        {id: 1, name: 'Dimitry'},
        {id: 2, name: 'Marina'},
        {id: 3, name: 'Roma'},
        {id: 4, name: 'Juliana'},
    ],
}

const messagesPageReduser = (state = initialState, action) => {
    switch (action.type) {
        case type2:                                                        //отправляет данные по клику
            let text = action.newMessagesElements;
            return  {
                ...state,
                messagesData: [...state.messagesData, {id: 5, message: text}],
            };
        default:
            return state;
    }
}
export const addMessagesActionCreator = (newMessagesElements) => ({type: type2, newMessagesElements})

export default messagesPageReduser;