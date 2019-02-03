import { API_USERS, API_EDIT_USER, API_DELETE_USER, API_ADD_USER } from '@/store/api.types'
import {
  A_GET_USERS,
  A_EDIT_USER,
  A_DELETE_USER,
  A_ADD_USER,
  A_SET_USERS_PER_PAGE
} from '@/store/action.types'
import { M_SET_USERS, M_SET_CURRENT_PAGE, M_SET_USERS_PER_PAGE } from '@/store/mutation.types'
import ApiService from '@/services/api.service'
import { TokenService } from '@/services/storage.service'

const state = {
  users: [],
  usersPerPage: 3,
  currentPage: 1
}

const getters = {
  GET_USERS: state => state.users,
  GET_USERS_PER_PAGE: state => state.usersPerPage,
  GET_CURRENT_PAGE: state => state.currentPage,
  GET_TOTAL_PAGES: state => Math.ceil(state.users.length / state.usersPerPage),
  GET_USER_BY_ID: state => id => state.users.find(user => user.id === id),
  GET_FILTERED_USERS: state => {
    return state.users.filter((user, index) => {
      let start = (state.currentPage - 1) * state.usersPerPage
      let end = state.currentPage * state.usersPerPage
      if (index >= start && index < end) return true
    })
  }
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
  [A_DELETE_USER]({ commit, dispatch }, id) {
    return ApiService.HTTP.delete(`${API_DELETE_USER}/${id}`).then(() => {
      dispatch(A_GET_USERS)
      commit(M_SET_CURRENT_PAGE, 1)
    })
  },
  [A_ADD_USER]({ dispatch }, user) {
    return ApiService.HTTP.post(API_ADD_USER, user).then(res => {
      TokenService.saveToken(res.config.data)
      dispatch(A_GET_USERS)
    })
  },
  [A_SET_USERS_PER_PAGE]({ commit }, payload) {
    commit(M_SET_CURRENT_PAGE, 1)
    commit(M_SET_USERS_PER_PAGE, payload)
  }
}

const mutations = {
  [M_SET_USERS](state, payload) {
    state.users = payload
  },
  [M_SET_CURRENT_PAGE](state, payload) {
    state.currentPage = payload
  },
  [M_SET_USERS_PER_PAGE](state, payload) {
    state.usersPerPage = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
