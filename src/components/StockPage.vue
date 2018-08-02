<template>

  <div class="stockPage">
    <article>
      <h2 class="symbol">{{$route.params.name}}</h2>
      <p class="copy">{{stockData.companyName}}</p>
    </article>
    <stockPageInfo :dataStock="stockData" :name="$route.params.name"></stockPageInfo>
  </div>

</template>

<script>

  import { mapState } from 'vuex'
  import { mapGetters } from 'vuex'
  import StockPageInfo from './StockPageInfo'

  export default {

    name: 'stockPage',
    data: function() {
      return {
        stockname: null,
        stockData: null
      }
    },
    watch: {
      '$route': 'fetchStockData'
    },
    methods: {
      fetchStockData () {
        this.$router.push('/stock/'+this.$route.params.name)
      }
    },
    computed: {
      ...mapState([
        'stocks'
      ]),
      ...mapGetters([
        'get_stock',
        'get_stock_info'
      ]),
      Stock() {
        return this.get_stock(this.$route.params.name)
      },
      StockInfo() {
        return this.get_stock_info(this.$route.params.name)
      }
    },
    created() {
      this.stockname = this.$route.params.name,
      this.stockData = this.StockInfo
    },
    mounted() {
      this.$store.dispatch('loadStocks')
    },
    components: {
      StockPageInfo
    }
  }

</script>
