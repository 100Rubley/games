import * as axois from 'axios'

let instance = axois.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "d13b0bba-bee9-404e-ab46-e96447bd9242"
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 6) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(responce => { return responce.data })
  },

  follow(userID) {
    return instance.post(`follow/${userID}`)
      .then(responce => { return responce.data.resultCode })
  },

  unfollow(userID) {
    return instance.delete(`follow/${userID}`)
      .then(responce => { return responce.data.resultCode })
  },
}

export const profileAPI = {
  getProfile(userID) {
    return instance.get('profile/' + userID)
  },
}

export const authAPI = {
  me() {
    return instance.get('auth/me')
      .then(response => { return response.data })
  },
}
