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
        {id: 1, name: 'Dimitry'},
        {id: 2, name: 'Marina'},
        {id: 3, name: 'Roma'},
        {id: 4, name: 'Juliana'},
    ],
    NewMessagesText: '',
}

const messagesPageReduser = (state = initialState, action) => {
    switch (action.type) {
        case type2:                                                        //отправляет данные по клику
            let text = state.NewMessagesText;
            return  {
                ...state,
                NewMessagesText: '',
                messagesData: [...state.messagesData, {id: 5, message: text}],
            };
        case type3:                                              // обновляет textarea при вводе данных
            return  {...state, NewMessagesText: action.newText}
        default:
            return state;
    }
}
export const addMessagesActionCreator = () => ({type: type2})
export const updateMessagesTextActionCreator = (text) => ({type: type3, newText: text})
export default messagesPageReduser;