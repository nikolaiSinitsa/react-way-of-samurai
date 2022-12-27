import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': "c4ed82f4-d916-4421-b23f-99a90fecb3e2"
    }
});
export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance
            .get(`users?page=${currentPage}&count=e${pageSize}`).then(response => response.data);
    },
    unfollow(id) {
        return instance
            .delete(`follow/${id}`)
            .then(response => response.data);
    },
    follow(id) {
        return instance
            .post(`follow/${id}`)
            .then(response => response.data);
    },
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`).then(response => response.data)
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`).then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status}).then(response => response.data)
    }
}
export const authAPI = {
    getMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe }).then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data)
    }
}