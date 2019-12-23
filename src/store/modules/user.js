import Vue from 'vue'
import { getToken , getUserInfo } from '@/api/login'

const user = {
  state: {
    token: '',
    username: "",
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERNAME: (state, username) => {
      state.username = username
    }
  },

  actions: {
    // 登录
    Login ({ commit }, data) {
      return new Promise((resolve, reject) => {
        getToken(data)
          .then(res => {
            Vue.ls.set('token', res.data.token, 7 * 24 * 60 * 60 * 1000)
            commit('SET_TOKEN', res.data.token)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    // 获取用户信息
    GetUserInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(res => {
          commit('SET_USERNAME', res.data.username)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },

    // 登出
    Logout ({ commit, state }) {
      return new Promise((resolve) => {
        logout(state.token).then(() => {
          resolve()
        }).catch(() => {
          resolve()
        }).finally(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          Vue.ls.remove(ACCESS_TOKEN)
        })
      })
    }

  }
}

export default user
