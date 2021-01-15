<template>
  <div class="Login pa-5">
    <v-card elevation="6" class="mx-auto pa-5" max-width="900" min-height="500">
      <v-card-title class="justify-center"
        >Registro de restaurante</v-card-title
      >
      <v-container class="d-flex justify-center flex-column">
        <v-text-field
          v-model="name"
          label="Nombre de Restaurante"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="description"
          label="Descripción"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="address"
          label="Dirección"
          outlined
        ></v-text-field>

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
      </v-container>
      <v-container class="d-flex flex-column ma-3" align-center>
        <v-btn
          class="justify-center"
          style="max-width: 300px"
          @click="registerRestaurant"
          color="orange accent-2"
          dark
          large
          align-center
          >Submit</v-btn
        >
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "RegisterRestaurant",
  methods: {
    registerRestaurant() {},
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
      return `<div class="card">
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