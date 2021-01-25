import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "ef985269-a9ea-44ef-8f52-1417dfebe658"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
}

// export const getFollowed = (id) => {
//     return instance.delete(`follow/${id}`)
//         .then(response => response.data);
// }