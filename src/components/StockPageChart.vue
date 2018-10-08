<template>
  <section>
    <div v-if="stockName" class="chart">
      <vue-frappe
        v-bind:id="stockName"
        v-bind:title="stockName"
        type="line"
        v-bind:labels="loadLabels"
        :height="240"
        :colors="['#44CFCB']"
        :lineOptions="{regionFill: 1}"
        :data-sets="[
          {name: '2017', values: loadPrices}
        ]"
      ></vue-frappe>
    </div>
  </section>
</template>

<script>

  export default {

    name: 'stockpagechart',
    props: {
      stockName: '',
      dataStock: null,
    },
    computed: {
      loadLabels() {
        let Labels
        Labels = this.dataStock.map(
          function(key){
            return key.label
          }
        )
        return Labels
      },
      loadPrices() {
        let  prices
        prices = this.dataStock.map(
          function(key){
            return key.close
          }
        )
        return prices
      }
    },
  }
</script>
