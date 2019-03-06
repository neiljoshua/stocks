<template>
  <div id="app">
    <Headerapp/>
    <router-view></router-view>
    <Footerapp/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { mapGetters } from 'vuex'
  import Headerapp from './components/Global/Headerapp'
  import Footerapp from './components/Global/Footerapp'

  export default {

    name: 'App',
    components: {
      Headerapp,
      Footerapp
    }

  }
</script>


