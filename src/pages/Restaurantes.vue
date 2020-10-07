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
                <v-list-item :key="i.id" v-for="i in items">
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
            :zoom="12"
            map-type-id="terrain"
            style="max-width: 1400px; height: 500px"
          >
            <GmapMarker
              :key="i.id"
              v-for="i in items"
              :position="i.position"
              :clickable="true"
              :draggable="true"
              @click="center = i.position"
            />
          </GmapMap>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Restaurantes",
  components: {},

  data: () => ({
    center: { lat: 41.40338, lng: 2.17403 },
    items: [
      {
        id: 0,
        name: "caseritos el budu 0",
        address: "en la esquina 0",
        image: "",
        category: "asia",
        position: { lat: 41.40338, lng: 2.17403 },
      },
      {
        id: 2,
        name: "caseritos el budu 1",
        address: "en la esquina 1",
        image: "",
        category: "tipicos",
        position: { lat: 41.41338, lng: 2.18403 },
      },
      {
        id: 3,
        name: "caseritos el budu 2",
        address: "en la esquina 2",
        image: "",
        category: "mexicana",
        position: { lat: 41.42338, lng: 2.19403 },
      },
    ],
  }),
};
</script>
>
