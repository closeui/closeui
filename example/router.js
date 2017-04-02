import Vue from 'vue'
import Router from 'vue-router'

import Header from './views/header'
import Button from './views/button'
Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    { path: '/header', component: Header },
    { path: '/button', component: Button },
    { path: '*', redirect: '/header' }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0) // scroll to top
  next()
})
export default router
