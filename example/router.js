import Vue from 'vue'
import Router from 'vue-router'

import Header from './views/header'
import Button from './views/button'
import Cell from './views/cell'
import CellSwipe from './views/cell-swipe'
Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    { path: '/header', component: Header },
    { path: '/button', component: Button },
    { path: '/cell', component: Cell },
    { path: '/cellswipe', component: CellSwipe },
    { path: '*', redirect: '/header' }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0) // scroll to top
  next()
})
export default router
