import {profileAPI, usersAPI} from "../api/api";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const set_Total_Users_Count = 'set-Total-Users-Count'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FETCHING_PROGRESS = 'TOGGLE-IS-FETCHING-PROGRESS'
const SET_STATUS = 'GET-STATUS'
const SET_UPDATE_STATUS = 'SET-UPDATE-STATUS'



let initialState = {
        users: [],
    pageSize:10, // количество стриниц
    totalUsersCount: 0,  // количество элементов
    currentPage: 1, //начальная страница
    isFetching: false,
    followingInProgress: [],
    status: "",
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
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}                  //склеивает два масива
        }
        case TOGGLE_IS_FETCHING_PROGRESS: {
            return {...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)}                  //склеивает два масива
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SET_UPDATE_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}
export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})  //получает с сервера масив users
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: set_Total_Users_Count, count: totalUsersCount})
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FETCHING_PROGRESS, isFetching, userId})
export const setStatus = (status, userId) => ({type: SET_STATUS, status, userId})
export const setUpdateStatus = (status, userId) => ({type: SET_UPDATE_STATUS, status, userId})


export const getUsersThunk = (currentPage, pageSize) => (dispatch) => {
        dispatch(setIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
export const follow = (userId) => (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.getFollowed(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            })
    }
export const unfollow = (userId) => (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.getUnFollowed(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            })
    }
export const getStatus = (userId) => (dispatch) => {
        profileAPI.getStatusAPI(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            })
    }
export const getUpdateStatus = (status) => (dispatch) => {
        profileAPI.updateStatusAPI(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
                }

            })
    }

export default friendsReduser;