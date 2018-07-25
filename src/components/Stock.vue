<template>
  <div class="single-stock">
    <h2 class="symbol">{{symbol}}</h2>
    <h3 class="net-change"> +1.2 </h3>
  </div>
</template>

<script>

  export default {
    name: 'stock',
    data: function() {
      return {
        symbol: null
      }
    },
    created() {

    }
  }

</script>
