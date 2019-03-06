<template v-if="stockInfo(stockname)">

  <main class="stock">

    <section class="stock-info">
      <h2 class="stock-info__title">{{$route.params.name}}</h2>
      <p class="stock-info__copy">{{stockInfo(stockname).companyName}}</p>
      <div class="table">
        <div class="table-row">
          <div class="table-cell"> Open: </div>
          <div class="table-cell">{{stockInfo(stockname).open}} </div>
        </div>
        <div class="table-row">
          <div class="table-cell">High:</div>
          <div class="table-cell">{{stockInfo(stockname).high}}</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Low:</div>
          <div class="table-cell">{{stockInfo(stockname).low}}</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Vol:</div>
          <div class="table-cell">{{stockInfo(stockname).latestVolume}}</div>
        </div>
      </div>
      <div class="table">
        <div class="table-row">
          <div class="table-cell">Close:</div>
          <div class="table-cell">{{stockInfo(stockname).close}}</div>
       </div>
        <div class="table-row">
          <div class="table-cell">52 Week High:</div>
          <div class="table-cell">{{stockInfo(stockname).week52High}}</div>
        </div>
        <div class="table-row">
          <div class="table-cell">52 Week Low:</div>
          <div class="table-cell">{{stockInfo(stockname).week52Low}}</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Avg. Vol:</div>
          <div class="table-cell">{{stockInfo(stockname).avgTotalVolume}}</div>
        </div>
      </div>
    </section>
    <stockPageChart v-if="chart(stockname)" :dataStock="chart(stockname)" :stockName="$route.params.name"></stockPageChart>
    <StockPageNews v-if="news(stockname)" :dataNews="news(stockname)"></StockPageNews>
  </main>

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
