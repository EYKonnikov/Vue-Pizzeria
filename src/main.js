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


Vue.use(VueRouter)

const routes = [
  { path: '/', component: Main },
  { path: '/admin', component: Admin },
  { path: '/menu', component: Menu },
  { path: '/about', component: About, children: [
    { path: '/contact', component: Contact },
    { path: '/history', component: History },
    { path: '/delivery', component: Delivery },
    { path: '/delivery', component: Delivery },
    { path: '/ordering-guide', component: OrderingGuide }

  ]},
  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
