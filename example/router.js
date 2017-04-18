import Vue from 'vue'
import Router from 'vue-router'

import Header from './views/header'
import Button from './views/button'
import Cell from './views/cell'
import CellSwipe from './views/cell-swipe'
import Tabbar from './views/tabbar'
import Navbar from './views/navbar'
import TabContainer from './views/tab-container'
Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    { path: '/header', component: Header },
    { path: '/button', component: Button },
    { path: '/cell', component: Cell },
    { path: '/cellswipe', component: CellSwipe },
    { path: '/tabbar', component: Tabbar },
    { path: '/navbar', component: Navbar },
    { path: '/tab-container', component: TabContainer },
    { path: '*', redirect: '/header' }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0) // scroll to top
  next()
})
export default router
