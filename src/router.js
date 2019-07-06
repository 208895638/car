import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import car from './views/car/index.vue'
import user from './views/user/index.vue'
import info from './views/goodsInfo/index.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:"r-active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        footerShow:true
      }
    },
    {
      path: '/info/:id',
      name: 'info',
      component: info,
      meta:{
        footerShow:false
      }
    },
    {
      path: '/car',
      name: 'car',
      component: car,
      meta:{
        footerShow:true
      }
    },
    {
      path: '/user',
      name: 'user',
      component: user,
      meta:{
        footerShow:true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta:{
        footerShow:true
      }
    }
  ]
})
