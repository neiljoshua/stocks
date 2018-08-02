<template>
  <header class="headerapp">
    <button @click="goToHomePage" class="logo">S</button>
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

