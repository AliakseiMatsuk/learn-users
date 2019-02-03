import { API_USERS, API_EDIT_USER, API_DELETE_USER, API_ADD_USER } from '@/store/api.types'
import { A_GET_USERS, A_EDIT_USER, A_DELETE_USER, A_ADD_USER } from '@/store/action.types'
import { M_SET_USERS } from '@/store/mutation.types'
import ApiService from '@/services/api.service'
import { TokenService } from '@/services/storage.service'

const state = {
  users: []
}

const getters = {
  GET_USERS: state => state.users,
  GET_USER_BY_ID: state => id => state.users.find(user => user.id === id)
}

const actions = {
  [A_GET_USERS]({ commit }) {
    return ApiService.HTTP.get(API_USERS).then(res => {
      commit(M_SET_USERS, res.data)
    })
  },
  [A_EDIT_USER]({ dispatch }, user) {
    return ApiService.HTTP.put(`${API_EDIT_USER}/${user.id}`, user).then(() => {
      dispatch(A_GET_USERS)
    })
  },
  [A_DELETE_USER]({ dispatch }, id) {
    return ApiService.HTTP.delete(`${API_DELETE_USER}/${id}`).then(() => {
      dispatch(A_GET_USERS)
    })
  },
  [A_ADD_USER]({ dispatch }, user) {
    return ApiService.HTTP.post(API_ADD_USER, user).then(res => {
      TokenService.saveToken(res.config.data)
      dispatch(A_GET_USERS)
    })
  }
}

const mutations = {
  [M_SET_USERS](state, payload) {
    state.users = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
