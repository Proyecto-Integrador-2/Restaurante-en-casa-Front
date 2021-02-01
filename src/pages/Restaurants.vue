<template>
  <div style="margin:auto" class="ma-5">
      <v-row>
        <v-col>
          <v-card class="pa-3" height="600px">
            <h1>Restaurantes</h1>
            <v-list style="max-height: 530px" class="overflow-y-auto">
              <v-list-item-group color="primary">
                <v-list-item
                  :key="i.id"
                  v-for="i in restaurantsList"
                  @click="toggleInfoWindow(i, i.id)"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="i.name"></v-list-item-title>
                    <v-list-item-subtitle
                      v-text="i.address"
                    ></v-list-item-subtitle>
                    <v-list-item-subtitle
                      v-text="i.category"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn icon @click="detailsWindow(i.id)">
                      <v-icon color="grey lighten-1">mdi-information</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>

        <v-col cols="11" xl="8" lg="7" sm="6">
          <GmapMap
            :center="center"
            :zoom="13"
            map-type-id="roadmap"
            style="max-width: 1400px; height: 600px"
          >
            <GmapMarker
              :key="i.id"
              v-for="i in restaurantsList"
              :position="i.position"
              :clickable="true"
              :draggable="false"
              @click="toggleInfoWindow(i, i.id)"
            />
            <Gmap-info-window
              :options="infoOptions"
              :position="infoWindowPos"
              :opened="infoWinOpen"
              @closeclick="infoWinOpen = false"
            >
              <div v-html="infoContent"></div>
            </Gmap-info-window>
          </GmapMap>
        </v-col>
      </v-row>

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
      console.log(error)
    }
  },

  //Methods
  methods: {
    detailsWindow: function (id) {
      this.$router.push({
        name: "RestaurantDetails",
        params: { id },
      });
    },

    toggleInfoWindow: function (i, id) {
      this.infoWindowPos = i.position;
      this.infoContent = this.getInfoWindowContent(i);
      this.center = i.position;

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == id) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = id;
      }
    },

    getInfoWindowContent: function (i) {
      return`<div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">${i.name}</p>
            </div>
          </div>
          <div class="content">
            ${i.description}
            <br>
          </div>
        </div>
      </div>`;
    },
  },

  //Data
  data: () => ({
    infoWindow: {
      position: { lat: 0, lng: 0 },
      open: false,
      template: "",
    },
    infoContent: "",
    infoWindowPos: {
      lat: 0,
      lng: 0,
    },
    infoWinOpen: false,
    currentMidx: null,
    //optional: offset infowindow so it visually sits nicely on top of our marker
    infoOptions: {
      pixelOffset: {
        width: 0,
        height: -35,
      },
    },
    center: { lat: 6.158707, lng: -75.5887989 },
    restaurantsList: [],
  }),
};
</script>

