<template>
  <div style="margin: auto" class="ma-3 mt-4">
    <v-card max-width="80%" min-height="500" style="margin: auto">
      <v-card-title class="justify-center ma-3">Mi Cuenta</v-card-title>
      <v-tabs vertical>
        <v-tab class="ma-2">
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

        <v-tab-item>
          <v-card flat>
            <v-list>
              <v-list-item>
                <v-list-item-title>Nombre</v-list-item-title>
                <v-list-item-subtitle>Angie Castañeda</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Email</v-list-item-title>
                <v-list-item-subtitle
                  >pepitoperez@gmail.com</v-list-item-subtitle
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Celular</v-list-item-title>
                <v-list-item-subtitle>123456</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Tipo de Documento</v-list-item-title>
                <v-list-item-subtitle>cc</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Numero de Documento</v-list-item-title>
                <v-list-item-subtitle>11111111</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card>
        </v-tab-item>
        <v-tab-item>
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
        <v-tab-item>
          <v-card flat v-if="flag == false">
            <v-card-text>
              <p>No hay ningun restaurante registrado.</p>
              <v-btn
                class="justify-center"
                style="min-width: 150px"
                @click="registerRestaurantView"
                >Register Restaurant</v-btn
              >
            </v-card-text>
          </v-card>
          <v-card flat v-else>
            <v-list>
              <v-list-item>
                <v-list-item-title>Nombre del restaurante</v-list-item-title>
                <v-list-item-subtitle>Caseritos Angie</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Email</v-list-item-title>
                <v-list-item-subtitle
                  >pepitoperez@gmail.com</v-list-item-subtitle
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Celular</v-list-item-title>
                <v-list-item-subtitle>123456</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Tipo de Documento</v-list-item-title>
                <v-list-item-subtitle>cc</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Numero de Documento</v-list-item-title>
                <v-list-item-subtitle>11111111</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
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
  }),
  methods: {
    registerRestaurantView() {
      this.$router.push({ name: "RegisterRestaurant" });
    },
  },
};
</script>
