<template>
  <v-app class="gray lighten-4">
    <Nav Home/>
    <v-contentv>
      <router-view></router-view>
    </v-contentv>
  </v-app>
</template>

<script>
/*eslint-disable*/
// import Home from '@/views/Home.vue'
import './assets/style.scss'
export default {
  name: "App",
  data() {
    return {
      //
    }
  }
}
</script>
