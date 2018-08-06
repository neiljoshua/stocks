<template>
  <div class="stocks-list">
    <h4> Weekly Report</h4>
    <ul>
      <li v-for="chart in charts" class="stocks-item">
         <p class="stocks-item__day">{{chart.date}}</p>
         <p class="stocks-item__price">{{chart.high}} USD </p>
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
    }
  }

</script>

