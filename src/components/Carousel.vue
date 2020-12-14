<template>
  <div class="pl-10 pr-10">
    <v-carousel continuous=true height="400" style="max-width: 600px; margin:auto" >
      <v-carousel-item v-for="img in images" :key="img" style="max-width: 600px; margin:auto">
        <img :src="img"  height="400" />
      </v-carousel-item>
    </v-carousel>
    <!-- <v-slide-group class="pa-4" show-arrows>
      <v-slide-item v-for="img in images" :key="img">
        <img :src="img" width="700" />
      </v-slide-item>
    </v-slide-group> -->
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data: () => ({
    id: 0,
    restaurantDetail: {},
    images: [
      "https://micasamirestauranteintegrador.s3.us-east-2.amazonaws.com/carousel1.jpg",
      "https://micasamirestauranteintegrador.s3.us-east-2.amazonaws.com/carousel2.jpg",
      "https://micasamirestauranteintegrador.s3.us-east-2.amazonaws.com/carousel3.jpg",
      "https://micasamirestauranteintegrador.s3.us-east-2.amazonaws.com/carousel4.jpg",
      "https://micasamirestauranteintegrador.s3.us-east-2.amazonaws.com/carousel5.jpg",
    ],
  }),
};
</script>
