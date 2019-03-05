<template>
  <header class="header">
    <button @click="goToHomePage" class="header__logo"><img src="/static/img/favicon.ico" alt="Stocks App"></button>
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

