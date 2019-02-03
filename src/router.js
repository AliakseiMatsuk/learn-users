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
  linkActiveClass: 'active',
  routes: [
    {
      path: '/user-list',
      name: 'user-list',
      component: Users,
      meta: { requiresAuth: true }
    },
    {
      path: '/edit-user/:id',
      name: 'edit-user',
      component: EditUser
    },
    {
      path: '/add-user',
      name: 'add-user',
      component: AddUser
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    next(!TokenService.getToken() ? { name: 'add-user' } : true)
  } else {
    next()
  }
})

router.beforeResolve((to, from, next) => {
  if (to.path) NProgress.start()
  next()
})

router.afterEach(() => NProgress.done())

export default router
