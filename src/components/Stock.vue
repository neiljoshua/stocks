<template>
  <article :stockId="stock.quote.symbol">
    <div class="info">
      <button @click="goToStockPAge" class="symbol">{{stock.quote.symbol}}</button>
      <!-- <h2 class="symbol">
      <router-link :to="{ path: '/stock/' + stock.quote.symbol, params:{stockById} } ">{{stock.quote.symbol}}</router-link>
      </h2> -->
      <h3 class="net-change"> {{stock.quote.change}} </h3>
      <p class="price"> {{stock.quote.delayedPrice}} USD</p>
    </div>
    <stockChart :stock="stock.chart" :stockId="stock.quote.symbol"></stockChart>
    <canvas v-bind:id="stock.quote.symbol" width="400" height="400"></canvas>
  </article>
</template>

<script>
  import StockChart from './StockChart'

  export default {
    name: 'Stock',
    data () {
      return{
        stockById: this.stock.quote.symbol
      }
    },
    props: {
      stock: Object,
    },
    methods: {
      goToStockPAge() {
        this.$router.push('/stock/'+this.stockById)
      }
    },
    components: {
      StockChart
    }
  }
</script>

