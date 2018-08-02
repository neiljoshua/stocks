<template>
  <article>
    <div v-if="name" class="chart">
      <h2 class="chart__tittle"> Chart </h2>
      <p class="chart__copy"> Chart with montly report will go here</p>
      <p class="chart__copy"> {{dataStock.change}} </h3>
      <p class="chart__copy"> {{dataStock.delayedPrice}} USD</p>
    </div>
  </article>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'StockPageInfo',
    props: {
      name: '',
      dataStock: Object
    },
    components: {
    }
  }
</script>
