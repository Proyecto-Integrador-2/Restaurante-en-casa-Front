<template>
  <div id="mainDiv">
    <v-row>
      <v-col>
        <v-card class="pa-4">
          <v-col>
            <h1>{{ this.restaurantDetail.name }}</h1>
            <br>
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
          <h1>Reservar</h1>
          <br />
          <h3>Total a pagar:</h3>
          50.000 COP
          <br />
          <v-btn
            class="justify-center"
            style="min-width: 150px"
            color="#7CB342"
            dark
            >Pagar</v-btn
          >
        </v-card>
      </v-col>
    </v-row>
    <v-card class="pa-4 mb-3">
      <v-row>
        <v-col>
          <v-carousel height="400">
            <v-carousel-item v-for="img in images" :key="img">
              <img :src="img" width="700" />
            </v-carousel-item>
          </v-carousel>
        </v-col>

        <v-col>
          <h3>Descripción:</h3>
          blablabla blablabla
          <br />
          <h3>Ingredientes:</h3>
          aslkdhasjd
          <br />
          <h3>Precio:</h3>
          50.000 COP
          <br />
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
      "https://micasamirestauranteintegrador.s3.us-east-2.amazonaws.com/menu.jpg",
      "https://micasamirestauranteintegrador.s3.us-east-2.amazonaws.com/menu2.jpg",
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