<template>
  <div>
    <v-app-bar color="#FFAB40" dark>
      <v-img
        src="../assets/image2.png"
        max-height="300"
        max-width="500"
        contain
      ></v-img>
      <v-spacer></v-spacer>
      <v-btn class="ma-4" @click="pageRestaurants()" icon>
        <v-icon large>mdi-silverware-fork-knife</v-icon>
      </v-btn>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="ma-4" icon v-bind="attrs" v-on="on">
            <v-icon large>mdi-account</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="() => {}">
            <v-list-item-title @click="account">Mi Cuenta</v-list-item-title>
          </v-list-item>
          <v-list-item @click="() => {}">
            <v-list-item-title>Mi Restaurante</v-list-item-title>
          </v-list-item>
          <v-list-item @click="() => {}">
            <v-list-item-title @click="logout">Cerrar Sesión</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods: {
    pageRestaurants: function () {
      if (this.$router.history.current.name != "Restaurants") {
        this.$router.push({
          name: "Restaurants",
        });
      }
    },
    account() {
      if (!localStorage.token) {
        console.log("no esta logeado");
        if (this.$router.history.current.name == "Login") {
          this.$forceUpdate();
        } else {
          this.$router.push({ name: "Login" });
        }
      } else {
        console.log("esta logeado");
      }
    },
    logout() {
      localStorage.removeItem("token");
      console.log("se cerró sesión");
      alert("Se ha cerrado sesión correctamente");
      if (this.$router.history.current.name == "Login") {
        this.$forceUpdate();
      } else {
        this.$router.push({ name: "Login" });
      }
    },
  },
};
</script>