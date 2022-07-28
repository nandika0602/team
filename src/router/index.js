import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/components/login'
import registration from '@/components/registration'
import HomePage from '@/components/HomePage'
import cart from '@/components/cart'
import card from '@/components/card'
import Orders from '@/components/Orders'

 
Vue.use(VueRouter)
 
  const routes = [
  {
    path: '/signup',
    name: 'registration',
    component: registration
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path:'/home',
    name:'HomePage',
    component:HomePage
  },
  {
    path:'/cart',
    name:'cart',
    component:cart
  },
  {
    path:'/card',
    name:'card',
    component:card
  },
  {
    path:'/orders',
    name:'Orders',
    component:Orders
  }
]
 
const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})
 
export default router
