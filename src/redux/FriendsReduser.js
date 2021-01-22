const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const set_Total_Users_Count = 'set-Total-Users-Count'


let initialState = {
        users: [],
    pageSize:10, // количество стриниц
    totalUsersCount: 0,  // количество элементов
    currentPage: 1, //начальная страница
    isFetching: false,
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
        case SET_USERS: {                                             //получает с сервера масив users
            return {...state, users: action.users} //склеивает два масива
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}                  //склеивает два масива
        }
        case set_Total_Users_Count: {
            return {...state, totalUsersCount: action.count}                  //склеивает два масива
        }
        default:
            return state;
    }
}
export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})  //получает с сервера масив users
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})  //получает с сервера масив users
export const setTotalUsersCount = (totalUsersCount) => ({type: set_Total_Users_Count, count: totalUsersCount})  //получает с сервера масив users


export default friendsReduser;