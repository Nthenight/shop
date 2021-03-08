import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue');
const Cart = () => import('../views/cart/Cart.vue');
const Search = () => import('../views/search/Search.vue');
const Profile = () => import('../views/profile/Profile.vue');
const Detail = () => import('../views/detail/Detail.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component:Cart
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
