import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default function ({ store }) {
  const routes =[
    {
      path: '/login',
      alias: '/',
      component: () => import('pages/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('layouts/MainLayout.vue'),
      children:store.getters['local/routes']
    },{
      path: '*',
      name: 'Not Found',
      component: () => import('pages/Error404.vue'),
    }
  ];



  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })


  Router.beforeEach((to, from, next) => {
      next();
  });

  return Router
}
