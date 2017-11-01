import Vue from 'vue'
import Router from 'vue-router'

import DemoList from './views/demolist'
import Demo from './views/demos'
import Layout from './views/layout'
import Header from './views/header'
import Button from './views/button'
import Cell from './views/cell'
import CellSwipe from './views/cell-swipe'
import Tabbar from './views/tabbar'
import Navbar from './views/navbar'
import TabContainer from './views/tab-container'
import Loading from './views/loading'
import Search from './views/search'
import Switch from './views/switch'
import CheckList from './views/checklist'
import CheckBox from './views/checkbox'
import Radio from './views/radio'
import Field from './views/field'
import ActionSheet from './views/action-sheet'
import Dialog from './views/dialog'
import Toast from './views/toast'
import Tab from './views/tab'
import Popup from './views/popup'
import Badge from './views/badge'
import Lazyload from './views/lazyload'
import Picker from './views/picker'
Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: DemoList, name: 'demolist' },
    { path: '/layout', component: Layout, name: 'layout' },
    { path: '/header', component: Header, name: 'header' },
    { path: '/button', component: Button, name: 'button' },
    { path: '/cell', component: Cell, name: 'cell' },
    { path: '/cell-swipe', component: CellSwipe, name: 'cellswipe' },
    { path: '/tabbar', component: Tabbar, name: 'tabbar' },
    { path: '/tab-container', component: TabContainer, name: 'tab-container' },
    { path: '/loading', component: Loading, name: 'loading' },
    { path: '/search', component: Search, name: 'search' },
    { path: '/switch', component: Switch, name: 'switch' },
    { path: '/checklist', component: CheckList, name: 'checklist' },
    { path: '/checkbox', component: CheckBox, name: 'checkbox' },
    { path: '/field', component: Field, name: 'field' },
    { path: '/radio', component: Radio, name: 'radio' },
    { path: '/action-sheet', component: ActionSheet, name: 'action-sheet' },
    { path: '/dialog', component: Dialog, name: 'dialog' },
    { path: '/toast', component: Toast, name: 'toast' },
    { path: '/navbar', component: Tab, name: 'navbar' },
    { path: '/popup', component: Popup, name: 'popup' },
    { path: '/badge', component: Badge, name: 'badge' },
    { path: '/lazyload', component: Lazyload, name: 'lazyload' },
    { path: '/picker', component: Picker, name: 'picker' },
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0) // scroll to top
  next()
})
export default router
