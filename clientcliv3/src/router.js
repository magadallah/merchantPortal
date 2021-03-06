import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Merchant from './views/Merchant.vue'
import CreateMerchant from './views/Createmerchant.vue'
import ViewMerchant from './views/Viewmerchant.vue'
import EditMerchant from './views/Editmerchant.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: Register
      //component: () => import(/* webpackChunkName: "about" */ './views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/merchantlist',
      name: 'merchantlist',
      component: Merchant
      //component: () => import(/* webpackChunkName: "about" */ './views/Merchant.vue')
    },
    {
      path: '/merchantlist/createmerchant',
      name: 'create-merchant',
      component: CreateMerchant
    },
    {
      path: '/merchantlist/:viewmerchantId',
      name: 'viewmerchant',
      component: ViewMerchant
    },
    {
      path: '/merchantlist/:viewmerchantId/edit',
      name: 'edit-merchant',
      component: EditMerchant
    }
    
  ]
})
