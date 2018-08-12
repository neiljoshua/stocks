<template>

  <article :stockId="stock.quote.symbol">
    <div class="info">
      <button @click="goToStockPAge" class="symbol">{{stock.quote.symbol}}</button>
      <h3 class="net-change" v-bind:class="stockChangeValue" > {{stock.quote.change}} </h3>
      <p class="price">$ {{roundValue}}</p>
    </div>
    <stockChart :stock="stock.chart" :stockId="stock.quote.symbol"></stockChart>
  </article>

</template>

<script>
  import StockChart from './StockChart'

  export default {
    name: 'stock',
    data () {
      return {
        stockById: this.stock.quote.symbol,
        negative: 'neg',
        positive: 'pos',
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
    computed: {
      stockChangeValue() {
        if (this.stock.quote.change < 0) {
          return {
            neg: this.negative
          }
        } else if(this.stock.quote.change > 0){
          return{
            pos: this.positive
          }
        }
      },
      roundValue() {
        return Number.parseFloat(this.stock.quote.delayedPrice).toFixed(2);
      }
    },
    components: {
      StockChart
    }
  }
</script>

