import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const store = new Vuex.Store({

  state: {
    stocks: []
  },
  getters: {
    get_stock: (state) => (key) => {
      return state.stocks[key]
    },
    get_stock_info: (state) => (key) =>{
      return state.stocks[key].quote
    },
    get_stock_chart: (state) => (key) =>{
      return state.stocks[key].chart
    },
    get_stock_news: (state) => (key) =>{
      return state.stocks[key].news
    }
  },
  actions: {
    loadStocks ({ commit }) {
      var apiToken = process.env.IEXAPI;
      axios
        .get('https://cloud.iexapis.com/v1/stock/market/batch?symbols=aapl,fb,msft,tsla,ba&types=quote,news,chart&range=1m&last=1&token='+apiToken)
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

