import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './components/Main.vue'
import Menu from './components/Menu.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Delivery from './components/Delivery.vue'
import History from './components/History.vue'
import OrderingGuide from './components/OrderingGuide.vue'
import Admin from './components/Admin.vue'
import App from './App.vue'
import { runInContext } from 'vm';


Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'mainLink', component: Main },
  { path: '/admin', name: 'adminLink', component: Admin, beforeEnter: (to, from, next) => {
    alert('This area is for authorised users only, please login to continue.');
    next();
  }},
  { path: '/menu', name: 'menuLink', component: Menu },
  { path: '/about', name: 'aboutLink', component: About, children: [
    { path: '/contact', name: 'contactLink', component: Contact },
    { path: '/history', name: 'historyLink', component: History },
    { path: '/delivery', name: 'deliveryLink', component: Delivery },
    { path: '/ordering-guide', name: 'orderingGuideLink', component: OrderingGuide }

  ]},
  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } 
  }
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
