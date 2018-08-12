<template>
  <div class="stocks-list">
    <h4> Weekly Report</h4>
    <ul>
      <li v-for="chart in charts" class="stocks-item">
         <p class="stocks-item__day">{{chart.label}}</p>
         <p class="stocks-item__price"> $ {{ roundValue(chart.high) }} </p>
       </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'stockChart',
    props:  {
       stockId: {
        type: String,
       },
       stock: null
    },
    data: function() {
      return {
        charts: {},
        id: this.stockId
      }
    },
    created: function() {
      this.charts = this.stock.splice(-5).reverse();
    },
    methods: {
      roundValue(value) {
        return Number.parseFloat(value).toFixed(2);
      }
    }
  }

</script>

