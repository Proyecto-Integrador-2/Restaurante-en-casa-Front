<template>
  <div id="app">
    <v-app>
      <Navbar/>
      <v-main>
        <router-view></router-view>
      </v-main>
      <Footer/>
    </v-app>
  </div>
</template>

<script>

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Footer,
    Navbar,
  },

};
</script>
