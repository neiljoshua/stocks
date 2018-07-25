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
    stocksreverse: []
  },
  getters: {
    reverseCharts (state,getters) {
      let stockObj = state.stocks
      return (id) => {
        let chart = Object.keys(stockObj).forEach(function(e){
          if( e == id ){
            let chart = stockObj[e].chart
            let reverseChart = chart.slice(-5).reverse()
            console.log('object',reverseChart)
            return reverseChart
          }
        });
      }
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
    },
  },
  mutations: {
    SET_STOCKS (state, stocks) {
      state.stocks = stocks
    }

  }
});

// store.dispatch('entities', { data: this.$tore.state.stocks })
// store.dispatch('entities/create', { data: stocks })
