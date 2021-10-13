import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

import VueScrollTo from 'vue-scrollto';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: 'portfolio',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
        VueScrollTo.scrollTo(to.hash, 700);
        return { selector: to.hash }
    } else if (savedPosition) {
        return savedPosition;
    } else {
        return { x: 0, y: 0 }
    }
  }
})

export default router
