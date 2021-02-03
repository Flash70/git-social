import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "ef985269-a9ea-44ef-8f52-1417dfebe658"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    getFollowed(userId) {
        return instance.post(`follow/${userId}`)
    },
    getUnFollowed(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile (userId) {
        return profileAPI.getProfile(userId)
    },
}
export  const  authAPI = {
    me () {
        return instance.get(`auth/me`)
    },
    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout () {
        return instance.delete(`auth/login`)
    }
}
export  const  profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/` + userId);
    },
    getStatusAPI (userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatusAPI (status) {
        return instance.put(`profile/status/`, {status: status})
    }
}