<template>
  <div>
    <v-card
      elevation="6"
      class="mx-auto ma-2 pa-2 mt-4"
      max-width="1400"
      min-height="500"
    >
      <v-row>
        <v-col>
          <v-card class="ma-2 pa-2" height="500px">
            <h1>Restaurantes</h1>
            <v-list>
              <v-subheader>Lista</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item :key="i.id" v-for="i in restaurantsList">
                  <v-list-item-content>
                    <v-list-item-title v-text="i.name"></v-list-item-title>
                    <v-list-item-subtitle
                      v-text="i.address"
                    ></v-list-item-subtitle>
                    <v-list-item-subtitle
                      v-text="i.category"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>

        <v-col cols="12" xl="11" lg="9" sm="7">
          <GmapMap
            :center="center"
            :zoom="13"
            map-type-id="roadmap"
            style="max-width: 1400px; height: 500px"
          >
            <GmapMarker
              :key="i.id"
              v-for="i in restaurantsList"
              :position="i.position"
              :clickable="true"
              :draggable="true"
              @click="openInfoWindow(i)"
            />
          </GmapMap>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import restaurantServices from "../services/restaurants.services";

export default {
  name: "Restaurants",
  components: {},
  async beforeCreate() {
    try {
      let coordinates = await this.$getLocation();
      this.center.lat = coordinates.lat;
      this.center.lng = coordinates.lng;
    } catch (error) {
      this.center = { lat: 6.158707, lng: -75.5887989 };
    }
    try {
      let items = await restaurantServices.getRestaurants();
      this.restaurantsList = items.data;
    } catch (error) {
      console.log("Fallo retornando restaurantes");
    }
  },
  methods: {},

  data: () => ({
    infoWindow: {
      position: { lat: 0, lng: 0 },
      open: false,
      template: "",
    },
    center: { lat: 6.158707, lng: -75.5887989 },
    restaurantsList: [],
  }),
};
</script>
>
