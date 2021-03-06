import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import HomePage from './views/HomePage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/dock',
      name: 'dock',
      component: () => import('@/components/dock.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path:'/homePage',
      name:'home-page',
      component: HomePage
    }
  ],
});
