<template>
  <div class="Login pa-5">
    <v-card
      elevation="6"
      class="mx-auto pa-5"
      max-width="900"
      min-height="500"
    >
      <v-card-title class="justify-center">Registro</v-card-title>
      <v-container class="d-flex justify-center flex-column">
        <v-text-field label="Nombre Completo" outlined></v-text-field>
        <v-text-field label="Correo Electrónico" outlined></v-text-field>
        <v-text-field label="Número de celular" outlined></v-text-field>
        <v-combobox
          v-model="select"
          :items="items"
          label="Tipo de Documento"
          outlined
          allowCustom="False"
        ></v-combobox>
        <v-text-field label="Número de Documento" outlined></v-text-field>
        <v-text-field label="Contraseña" outlined></v-text-field>
        <v-text-field label="Repita la Contraseña" outlined></v-text-field>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: "",
      items: [ "Tarjeta de Identidad", "Cédula de Ciudadania", "Cédula de Extrangeria", "Pasaporte"],
    };
  },
};
</script>