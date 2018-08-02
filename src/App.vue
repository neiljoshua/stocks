<template>
  <div id="app">
    <Headerapp/>
    <router-view/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { mapGetters } from 'vuex'
  import Headerapp from './components/Global/Headerapp'

  export default {

    name: 'App',
    components: {
      Headerapp
    },

  }
</script>


