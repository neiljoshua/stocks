import Vue from 'vue'
import VueRouter from 'vue-router'
import Stocks from './components/Stocks'
import Stock from './components/Stock'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'stocks',
      component: Stocks
    },
    {
      path: '/:name',
      name: 'Stock',
      component: Stock
    }
  ]
});

export default router
