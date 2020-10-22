<template>
    <div>
        <h1>detalles</h1>
        <h2>{{this.id}}</h2>
        <h3>{{this.restaurantDetail.name}}</h3>
        <h3>{{this.restaurantDetail.description}}</h3>
        <h3>{{this.restaurantDetail.address}}</h3>
    </div>
</template>

<script>

import restaurantServices from "../services/restaurants.services";

export default {
  name: "RestaurantDetails",

  async created(){
    this.id=this.$route.params.id;
    try {
      let items = await restaurantServices.getRestaurantById(this.id);
      this.restaurantDetail = items.data;
    } catch (error) {
      console.log("Fallo retornando el restaurante");
      console.log(error)
    }
  },

  data: () => ({
      id:0,
      restaurantDetail: {},
  }),
};
</script>