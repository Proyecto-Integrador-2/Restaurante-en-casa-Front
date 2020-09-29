import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login';
import Home from '@/pages/Home';


Vue.use(Router);

export default new Router({
    routes: [
      {
        path: '*',
        redirect: '/Login',

        
    },
    {
        path: '/',
        redirect: '/Login',

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
    ]
  })