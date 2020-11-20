<template>
  <div>
    <v-card
      elevation="6"
      class="mx-auto ma-2 pa-2 mt-4"
      max-width="1400"
      min-height="500"
    >
      <v-card-title class="justify-center">{{ this.restaurantDetail.name }}</v-card-title>
      <h2>{{ this.id }}</h2>
      <h3></h3>
      <h3>{{ this.restaurantDetail.description }}</h3>
      <h3>{{ this.restaurantDetail.address }}</h3>
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
  }),
};
</script>