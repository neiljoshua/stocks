<template>
  <div class="Home">
    <stock v-for="stock in stocks" :key="stock.key" :stock="stock"></stock>
  </div>
</template>

<script>

  import { mapState } from 'vuex'
  import Stock from './Stock'

  export default {

    name: 'home',
    computed: {
      ...mapState([
        'stocks'
      ])
    },
    mounted() {
      this.$store.dispatch('loadStocks')
    },
    components: {
      Stock
    }
  }

</script>
