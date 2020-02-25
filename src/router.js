import Vue from 'vue';
import Router from 'vue-router';

import Animations from './views/Animations';
import Home from './views/Home';
import Login from './views/Login';
import NotFound from './views/NotFound';
import Signup from './views/Signup';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',

      // Lazy Loading Routes
      // 
      // When building apps with a bundler, the JavaScript bundle can become 
      // quite large, and thus affect the page load time. It would be more 
      // efficient if we can split each route's components into a separate 
      // chunk, and only load them when the route is visited.
      // 
      // https://router.vuejs.org/guide/advanced/lazy-loading.html

      component: () => import('./views/Dashboard.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/animations',
      name: 'animations',
      component: Animations
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});
