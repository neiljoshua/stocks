<template v-if="stockInfo(stockname)">

  <div class="stockPage">

    <article>
      <div class="stock-info">
        <h2 class="title">{{$route.params.name}}</h2>
        <p class="copy">{{stockInfo(stockname).companyName}}</p>
      </div>
    </article>
    <stockPageChart v-if="chart(stockname)" :dataStock="chart(stockname)" :stockName="$route.params.name"></stockPageChart>
    <StockPageNews v-if="news(stockname)" :dataNews="news(stockname)"></StockPageNews>
  </div>

</template>

<script>

  import { mapState } from 'vuex'
  import { mapGetters } from 'vuex'
  import StockPageChart from './StockPageChart'
  import StockPageNews from './StockPageNews'

  export default {

    name: 'stockPage',
    data: function() {
      return {
        stockname: this.$route.params.name
      }
    },
    watch: {
      '$route' (to, from) {
        this.stockname = to.params.name
      }
    },
    computed: {
      ...mapState([
        'stocks'
      ]),
      ...mapGetters({
        stockInfo: 'get_stock_info',
        chart: 'get_stock_chart',
        news: 'get_stock_news'
      }),
    },
    created() {
      this.stockname = this.$route.params.name
    },
    mounted() {
      this.$store.dispatch('loadStocks')
    },
    components: {
      StockPageChart,
      StockPageNews
    }
  }

</script>
