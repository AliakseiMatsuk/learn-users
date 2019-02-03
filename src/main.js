import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store/store'

import 'nprogress/nprogress.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import ApiService from '@/services/api.service'
import { TokenService } from '@/services/storage.service'

ApiService.init(process.env.VUE_APP_ROOT_API)

TokenService.getToken() && ApiService.setHeader()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
