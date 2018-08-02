import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import axios from 'axios'
import VueAxios from 'vue-axios'
import database from './database'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const store = new Vuex.Store({
  plugins: [VuexORM.install(database)],
  state: {
    stocks: [],
  },
  getters: {
    get_stock: (state) => (key) => {
      return state.stocks[key]
    },
    get_stock_info: (state) => (key) =>{
      return state.stocks[key].quote
    }
  },
  actions: {
    loadStocks ({ commit }) {
      axios
        .get('https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb,msft,tsla,ba&types=quote,news,chart&range=1m&last=1')
        .then(r => r.data)
        .then(stocks => {
          commit('SET_STOCKS', stocks)
        })
    }
  },
  mutations: {
    SET_STOCKS (state, stocks) {
      state.stocks = stocks
    }
  }
});

// store.dispatch('entities', { data: this.$tore.state.stocks })
// store.dispatch('entities/create', { data: stocks })
