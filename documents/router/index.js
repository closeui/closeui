import Vue from 'vue'
import Router from 'vue-router'
import NavConfig from './menu.json'

Vue.use(Router)

// import Home from '../views/index.vue'
// const router = new Router({
//   mode: 'hash',
//   routes: [
//     {path: '/zh', component: Home, name: 'home'}
//   ]
// })

function registerRoute (navConfig) {
  const routes = []
  const parentRoutes = {}

  Object.keys(NavConfig).forEach((lang, idx) => {
    const pageNavs = NavConfig[lang]
    for (const pageName in pageNavs) {
      pageNavs[pageName].forEach(nav => {
        const parentName = nav.name
        parentRoutes[`${parentName}-${lang}`] = parentRoutes[`${parentName}-${lang}`] || addParentRoute(parentName, lang)
        if (nav.groups) {
          nav.groups.forEach(group => {
            group.items.forEach(item => {
              addRoute(parentName, item, lang)
            })
          })
        } else if (nav.items) {
          nav.items.forEach(item => {
            addRoute(parentName, item, lang)
          })
        }
      })
    }
  })

  function addParentRoute (parentName, lang) {
    return {
      path: `/${lang}/${parentName.toLowerCase()}`,
      component: () => import(`../views/${parentName.toLowerCase()}${lang === 'zh' ? '' : `-${lang}`}.vue`),
      children: []
    }
  }

  function addRoute (parentName, item, lang) {
    parentRoutes[`${parentName}-${lang}`].children.push({
      path: `${item.name.toLocaleLowerCase()}`,
      name: `${item.name}-${lang}`,
      component: () => import(`../markdown/${lang}/${item.name.toLowerCase()}.md`)
    })
  }

  for (const key in parentRoutes) {
    if (parentRoutes.hasOwnProperty(key)) {
      routes.push(parentRoutes[key])
    }
  }

  return routes
}

let routes = registerRoute(NavConfig)

let navigatorLang = window.navigator.language.slice(0, 2)

if (['en', 'zh'].indexOf(navigatorLang) <= -1) {
  navigatorLang = ''
}

const userLang = localStorage.getItem('at-ui-language') || navigatorLang || 'zh'

routes = routes.concat([{
  path: '/zh',
  name: 'Home',
  component: () => import('../views/index.vue')
}, {
  path: '/en',
  name: 'Home-en',
  component: () => import('../views/index-en.vue')
}, {
  path: '/',
  redirect: { name: userLang === 'zh' ? 'Home' : `Home-${userLang}` }
}, {
  path: '*',
  redirect: { name: 'Home' }
}])

routes.forEach(page => {
  if (page.path === '/zh/guide') {
    page.children.push({
      path: '',
      name: 'Guide',
      redirect: { name: page.children[0].name }
    })
  } else if (page.path === '/en/guide') {
    page.children.push({
      path: '',
      name: 'Guide-en',
      redirect: { name: page.children[0].name }
    })
  } else if (page.path === '/zh/docs') {
    page.children.push({
      path: '',
      name: 'Docs',
      redirect: { name: page.children[0].name }
    })
  } else if (page.path === '/en/docs') {
    page.children.push({
      path: '',
      name: 'Docs-en',
      redirect: { name: page.children[0].name }
    })
  } else if (page.path === '/zh/resource') {
    page.children.push({
      path: '',
      name: 'Resource',
      redirect: { name: page.children[0].name }
    })
  } else if (page.path === '/en/resource') {
    page.children.push({
      path: '',
      name: 'Resource-en',
      redirect: { name: page.children[0].name }
    })
  }
})

const router = new Router({
  routes,
  // root: process.env.serverConfig.portalPrefix,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }

    return { x: 0, y: 0 }
  }
})

export default router
