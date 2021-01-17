const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
        // users: [
        //     {id: 1, followed: false, fullName: 'Dimitry', status: 'I am a boss', location: {city: 'Krasnodar', country: 'Russia'}},
        //     {id: 2, followed: true, fullName: 'Marina', status: 'I am', location: {city: 'Kopanskaya', country: 'Russia'}},
        //     {id: 3, followed: false, fullName: 'Roma', status: 'I am a child', location: {city: 'Kopanskaya', country: 'Russia'}},
        //     {id: 4, followed: false, fullName: 'Juliana', status: 'I am а child', location: {city: 'Kopanskaya', country: 'Russia'}},
        // ],
    }

const friendsReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}
export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})


export default friendsReduser;