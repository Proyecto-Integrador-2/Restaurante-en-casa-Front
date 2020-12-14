<template>
  <div id="mainDiv">
    <v-row>
      <v-col>
        <v-card class="pa-4">
          <v-col>
            <h1>{{ this.restaurantDetail.name }}</h1>
            <h3 style="font-weight: normal">
              {{ this.restaurantDetail.description }}
            </h3>
            <h3>Dirección:</h3>
            <h3 style="font-weight: normal">
              {{ this.restaurantDetail.address }}
            </h3>
          </v-col>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-4"> 
          <h1>AQUI BOTON PARA RESERVAR Y QUE TALES</h1>
        </v-card>
      </v-col>
    </v-row>
    <v-card class="pa-4 mb-3">
      <v-row>
        <v-col>
          <v-carousel v-model="model" height="400">
            <v-carousel-item v-for="img in images" :key="img">
              <img :src="img" width="700" />
            </v-carousel-item>
          </v-carousel>
        </v-col>

        <v-col>
          <h3>Descripción:</h3>
          <br />
          blablabla blablabla
          <br />
          <h3>Tipo de comida:</h3>
          aslkdhasjd
          <br />
          <h3>Precio:</h3>
          aslkdhasjd
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>


<script>
import restaurantServices from "../services/restaurants.services";

export default {
  name: "RestaurantDetails",

  async created() {
    this.id = this.$route.params.id;
    try {
      let items = await restaurantServices.getRestaurantById(this.id);
      this.restaurantDetail = items.data;
    } catch (error) {
      console.log("Fallo retornando el restaurante");
      console.log(error);
    }
  },

  data: () => ({
    id: 0,
    restaurantDetail: {},
    images: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
    ],
  }),
};
</script>

<style scoped>
#menuImage {
  max-width: 80%;
}
#mainDiv {
  margin: auto;
  padding-left: 5%;
  padding-right: 5%;
}
</style>