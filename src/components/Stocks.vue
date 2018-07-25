<template>
  <div class="stocks">
    <template v-for="stock in stocks">
      <article :nombre="name">
        <div class="info">
          <h2 class="symbol">
           <a @click.prevent="symbolSelected(stock.quote.symbol)" v-bind:href="stock.quote.symbol">{{stock.quote.symbol}}</a>
          </h2>
          <h3 class="net-change"> {{stock.quote.change}} </h3>
          <p class="price"> {{stock.quote.delayedPrice}} USD</p>
        </div>
        <ul class="stocks-list">
          <li v-for="chart in stockCharts(stock.quote.symbol)" class="stocks-item">
             <p class="stocks-item__day steph2">{{chart.date}}</p>
             <p class="stocks-item__price">{{chart.high}}</p>
           </li>
        </ul>
        <canvas v-bind:id="stock.quote.symbol" width="400" height="400"></canvas>
      </article>
    </template>
  </div>
</template>

<script>

  import { mapState } from 'vuex'
  import { mapGetters } from 'vuex'

  export default {

    name: 'stocks_list',
    data: function() {
      return {
        name: "Neil",
        stocks_data: [],
        symbol: '',
        chartsR: {}
      }
    },
    computed: {
      ...mapState([
        'stocks'
      ]),
       stockCharts: function () {
        return this.$store.getters.reverseCharts
      }
    },
    mounted() {
      this.$store.dispatch('loadStocks')
    },
    methods: {

      symbolSelected(key) {
        console.log(key)
        this.$store.state.symbol = key
      },
      createChart(chartId, chartData) {
        const ctx = document.getElementById(chartId);
        const myChart = new Chart(ctx, {
          type: chartData.type,
          data: chartData.data,
          options: chartData.options,
        });
      },
      chartById() {
        this.charts = this.$store.getters.chartsById
      }
    },
    components: {
    }
  }
</script>
