import Vue from 'vue'
import Vuex from 'vuex'

import users from '@/store/users.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users
  }
})
