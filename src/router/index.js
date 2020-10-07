import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login';
import Home from '@/pages/Home';
import Restaurantes from '@/pages/Restaurantes';


Vue.use(Router);

export default new Router({
    routes: [
      {
        path: '*',
        redirect: '/Restaurantes',

        
    },
    {
        path: '/',
        redirect: '/Restaurantes',

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
    path: '/Restaurantes',
    name: 'Restaurantes',
    component: Restaurantes
},
    ]
  })