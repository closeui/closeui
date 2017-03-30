import Vue from 'vue'
import Router from 'vue-router'

import Hello from './views/components/Hello'
Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: Hello }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0) // scroll to top
  next()
})
export default router
