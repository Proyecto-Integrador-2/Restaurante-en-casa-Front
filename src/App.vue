<template>
  <div id="app">
    <v-app>
      <Navbar v-if='this.$route.path !== "/Login"'/>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>

import Navbar from "./components/Navbar";

export default {
  name: "App",

  components: {
    Navbar,
  },

};
</script>
