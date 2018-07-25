<!-- <template>
  <div>
    <ul class="stocks-list">
      <li v-for="stock in stockCharts(stock.quote.symbol)" class="stocks-item">
         <p class="steph" style="color:red">{{stock[index].quote}}</p>
         <p class="stocks-item__day steph2">{{value.date}}</p>
         <p class="stocks-item__price">{{value.high}}</p>
       </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'stock-list',
    data: function() {
      return {
        reverseChart: {}
      }
    },
    computed: {
      stockCharts () {
        this.reverseChart = this.$store.getters.reverseCharts
      }
    }
  }

</script>
 -->
