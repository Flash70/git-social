const type2 = 'ADD-NEW-MESSAGES';
const type3 = 'UPDATE-MESSAGES-TEXT';

let initialState = {
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
        NewMessages: '',
    }

const messagesPageReduser = (state = initialState, action) => {
    switch (action.type) {
        case type2: //отправляет данные по клику
            let NewMessages = state.NewMessages
            state.messagesData.push({id: 5, message: NewMessages})
            state.NewMessages = '';
            return state;
        case type3: // обновляет textarea при вводе данных
            state.NewMessages = action.newText;
            return state;
        default:
            return state;
    }
}
export const addMessagesActionCreator = () => {
    return {
        type: type2
    }
}
export const updateMessagesTextActionCreator = (text) => ({type: type3, newText: text})
export default messagesPageReduser;