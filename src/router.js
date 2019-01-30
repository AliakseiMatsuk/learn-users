import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/views/Users.vue'
import EditUser from '@/views/EditUser.vue'
import AddUser from '@/views/AddUser.vue'

import { TokenService } from '@/services/storage.service'

import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/user-list',
      name: 'user-list',
      component: Users,
      beforeEnter(to, from, next) {
        next(!!TokenService.getToken() || { name: 'add-user' })
      }
    },
    {
      path: '/edit-user',
      name: 'edit-user',
      component: EditUser,
      beforeEnter(to, from, next) {
        next('userId' in to.params || { name: 'user-list' })
      }
    },
    {
      path: '/add-user',
      name: 'add-user',
      component: AddUser
    }
  ]
})

router.beforeResolve((to, from, next) => {
  if (to.path) NProgress.start()
  next()
})

router.afterEach(() => NProgress.done())

export default router
