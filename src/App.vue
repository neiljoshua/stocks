<template>
  <div id="app">
    <Headerapp/>
    <router-view/>
  </div>
</template>

<script>
  import Headerapp from './components/Global/Headerapp'

  export default {

    name: 'App',
    components: {
      Headerapp
    },

  }
</script>


