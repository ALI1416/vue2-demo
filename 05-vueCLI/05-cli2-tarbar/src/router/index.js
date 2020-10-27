import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Order = () => import('../views/order/Order')
const Profile = () => import('../views/profile/Profile')
const Shopcart = () => import('../views/shopcart/Shopcart')

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/profile',
    component: Profile
  },
]

const router = new Router({
  routes,
  mode: 'history',
})

export default router
