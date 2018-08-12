<template>
  <header class="headerapp">
    <button @click="goToHomePage" class="logo"><img src="/static/img/favicon.ico" alt="Stocks App"></button>
  </header>
</template>

<script>
  export default {
    name: 'Headerapp',
    methods: {
      goToHomePage() {
        this.$router.push('/')
      }
    },
  }
</script>

