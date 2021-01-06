import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login';
import Home from '@/pages/Home';
import Restaurants from '@/pages/Restaurants';
import RestaurantDetails from '@/pages/RestaurantDetails';
import Register from '@/pages/Register';
import Account from '@/pages/Account';
import RegisterRestaurant from '@/pages/RegisterRestaurant';
import RegisterMenu from '@/pages/RegisterMenu';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/Restaurants',


    },
    {
      path: '/',
      redirect: '/Restaurants',

    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Restaurants',
      name: 'Restaurants',
      component: Restaurants
    },
    {
      path: '/RestaurantDetails/:id',
      name: 'RestaurantDetails',
      component: RestaurantDetails
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/RegisterRestaurant',
      name: 'RegisterRestaurant',
      component: RegisterRestaurant
    },
    {
      path: '/RegisterMenu',
      name: 'RegisterMenu',
      component: RegisterMenu
    },
    {
      path: '/Account',
      name: 'Account',
      component: Account
    },
  ]
})