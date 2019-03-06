<template>
  <main class="stocks">
    <stock v-for="stock in stocks" :key="stock.key" :stock="stock"></stock>
  </main>
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
