<template>
  <div style="margin: auto" class="ma-3 mt-4">
    <v-card max-width="80%" min-height="500" style="margin: auto">
      <v-tabs vertical>
        <v-tab class="ma-2 mt-7">
          <v-icon left> mdi-account </v-icon>
          Mis datos
        </v-tab>
        <v-tab class="ma-2">
          <v-icon left> mdi-clock </v-icon>
          Mis pedidos
        </v-tab>
        <v-tab class="ma-2">
          <v-icon left>mdi-silverware-fork-knife</v-icon>
          Mi restaurante
        </v-tab>
        <v-tab class="ma-2">
          <v-icon left>mdi-flag</v-icon>
          FAQ
        </v-tab>
        <!-- Mis datos -->

        <v-tab-item>
          <v-card-title class="justify-center">Mis datos</v-card-title>
          <v-card flat>
            <v-list>
              <v-list-item>
                <v-list-item-title>Nombre</v-list-item-title>
                <v-list-item-subtitle>{{ this.name }}</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Email</v-list-item-title>
                <v-list-item-subtitle>{{ this.email }}</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Celular</v-list-item-title>
                <v-list-item-subtitle>{{ this.phone }}</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Tipo de Documento</v-list-item-title>
                <v-list-item-subtitle>{{
                  this.documentType
                }}</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Numero de Documento</v-list-item-title>
                <v-list-item-subtitle>{{
                  this.documentNumber
                }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card>
        </v-tab-item>
        <!-- Mis pedidos -->

        <v-tab-item>
          <v-card-title class="justify-center">Mis Pedidos</v-card-title>
          <v-card flat>
            <v-card-text>
              <p>Pedido 1</p>

              <p>Pedido 2</p>

              <p>Pedido 3</p>

              <p>Pedido 4</p>

              <p class="mb-0">Pedido 5</p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <!-- Mi restaurante -->

        <v-tab-item>
          <v-card-title class="justify-center">Mi Restaurante</v-card-title>
          <!-- No hay restaurante registrado -->
          <v-card flat v-if="flag == false">
            <v-card-text>
              <p>No hay ningun restaurante registrado.</p>
              <v-btn
                class="justify-center"
                style="min-width: 150px"
                @click="registerRestaurantView"
                >Registrar Restaurante</v-btn
              >
            </v-card-text>
          </v-card>
          <!-- Restaurante registrado -->
          <v-card flat v-else>
            <v-list>
              <v-list-item>
                <v-list-item-title>Nombre del restaurante</v-list-item-title>
                <v-list-item-subtitle>{{
                  this.restaurantName
                }}</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Dirección</v-list-item-title>
                <v-list-item-subtitle>{{
                  this.restaurantAddress
                }}</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Descripción</v-list-item-title>
                <v-list-item-subtitle>{{
                  this.restaurantDescription
                }}</v-list-item-subtitle>
              </v-list-item>
              <v-divider></v-divider>
              <v-card-title class="justify-center">Menú diario</v-card-title>
              <div v-if="flag == false">
                <v-list-item>
                  <v-list-item-title>Descripción</v-list-item-title>
                  <v-list-item-subtitle>11111111</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Ingredientes</v-list-item-title>
                  <v-list-item-subtitle>11111111</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Precio</v-list-item-title>
                  <v-list-item-subtitle>11111111</v-list-item-subtitle>
                </v-list-item>
              </div>
              <div v-else>
                <v-list-item>
                  <v-list-item-subtitle
                    >No hay ningun menú diario registrado</v-list-item-subtitle
                  >
                </v-list-item>
                <v-list-item>
                  <v-btn
                    class="justify-center"
                    style="min-width: 150px"
                    @click="registerMenu"
                    >Registrar Menú</v-btn
                  >
                </v-list-item>
              </div>
            </v-list>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import Account from "../services/account.services";
import RestaurantServices from "../services/restaurants.services";

export default {
  name: "Account",
  data: () => ({
    selectedItem: 1,
    items: [
      { text: "Mis datos", icon: "mdi-account" },
      { text: "Mis pedidos", icon: "mdi-clock" },
      { text: "Mi restaurante", icon: "mdi-house" },
      { text: "FAQ", icon: "mdi-flag" },
    ],
    flag: false,
    flagMenu: false,
    name: "",
    email: "",
    phone: "",
    documentType: "",
    documentNumber: "",
    restaurantName: "",
    restaurantAddress: "",
    restaurantDescription: "",
    menuDescription: "",
    menuIngredientes: "",
    menuPrice: "",
  }),
  async beforeCreate() {
    // try {
    let user = await Account.getUser();
    this.name = user.data.name;
    this.email = user.data.mail;
    this.phone = user.data.number;
    this.documentType = user.data.documentType;
    this.documentNumber = user.data.nrDocument;
    this.flag = user.data.isChef;
    if (this.flag == true) {
      let restaurant = await RestaurantServices.getRestaurantByUser();
      console.log(restaurant);
      this.restaurantName = restaurant.data.name;
      this.restaurantAddress = restaurant.data.address;
      this.restaurantDescription = restaurant.data.description;
      // if (this.flagMenu == true) {
      // }
    }
    // } catch (error) {
    //   console.log(error);
    //   console.log("Error retornando usuario");
    // }
  },
  methods: {
    registerRestaurantView() {
      this.$router.push({ name: "RegisterRestaurant" });
    },
    registerMenu() {
      this.$router.push({ name: "RegisterMenu" });
    },
  },
};
</script>
