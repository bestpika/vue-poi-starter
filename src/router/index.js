import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/Home.vue')

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    component: Home,
    meta: {
      title: 'Home'
    }
  }, {
    path: '/Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  }]
})

// 更改標題
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || from.meta.title || document.title
  next()
})

export default router
