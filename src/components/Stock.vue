<template>

  <article :stockId="stock.quote.symbol">
    <div class="info">
      <button @click="goToStockPAge" class="symbol">{{stock.quote.symbol}}</button>
      <h3 class="net-change"> {{stock.quote.change}} </h3>
      <p class="price"> {{stock.quote.delayedPrice}} USD</p>
    </div>
    <stockChart :stock="stock.chart" :stockId="stock.quote.symbol"></stockChart>
  </article>

</template>

<script>
  import StockChart from './StockChart'

  export default {
    name: 'stock',
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

