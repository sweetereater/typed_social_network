import axios from 'axios';

const API_KEY = "d0a91802-a331-4b0b-bd82-bbe83d7d11a0"

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": API_KEY
    }
})

export const usersAPI = {

    getUsers(page) {
        return axiosInstance.get(`users?page=${page}&count=3`).then(response => response.data)
    },
    followUser(userId) {
        return axiosInstance.post(`follow/${userId}`)
    },

    unFollowUser(userId) {
        return axiosInstance.delete(`follow/${userId}`)
    },

    getUser(userId) {
        return axiosInstance.get(`profile/${userId}`)
    }
}

export const profileAPI = {
    getStatus(userId) {
        return axiosInstance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return axiosInstance.put(`profile/status`, { status: status })
    }
}

export const authAPI = {
    isAuthorized() {
        return axiosInstance.get('auth/me').then(response => response.data);
    },

    logIn(email, password) {
        return axiosInstance.post('auth/login', { email, password }).then(data => data.data);
    },

    logOut() {
        return axiosInstance.delete('auth/login').then(data => data.data);
    }
}





