import './assets/scss/index.scss'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import App from './App'
import router  from './routes'
import {store} from './store/index'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h( App )
});
