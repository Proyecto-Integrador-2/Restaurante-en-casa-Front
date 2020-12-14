<template>
  <div style="margin:auto" class="ma-3 mt-4">

      <v-card-title class="justify-center">Mi Cuenta</v-card-title>
      <v-row>
        <v-col>
          <v-card id="leftCard" class="ma-1 pa-1">
            <v-list>
              <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" xl="11" lg="10" sm="7">
          <v-card class="ma-1 pa-1" height="500px">
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
        </v-col>
      </v-row>

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
      { text: "FAQ", icon: "mdi-flag" },
    ],
  }),
};
</script>

<style scoped>
/* @media (max-width: 617px) {
.leftCard{
    width: 150px;
}} */
</style>