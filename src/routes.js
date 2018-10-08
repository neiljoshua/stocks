import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import StockPage from './components/StockPage'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', //Get rid of # on url bar
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
      props: true,
    },
    {
      path: '/:name',
      component: StockPage,
      name: 'stock-page',
      props: true,
    }
  ]
});

export default router
