<template>
  <div class="Login pa-5">
    <v-card elevation="6" class="mx-auto pa-5" max-width="900" min-height="500">
      <v-card-title class="justify-center">Login</v-card-title>
      <v-container class="d-flex flex-column">
        <v-text-field v-model="email" label="Email" outlined></v-text-field>
        <v-text-field
          v-model="password"
          :type="'Password'"
          label="Password"
          outlined
        ></v-text-field>
      </v-container>
      <v-container class="d-flex flex-column" align-end>
        <v-btn
          class="justify-center"
          style="min-width: 150px"
          color="#7CB342"
          @click="submit"
          dark
          >Ingresar</v-btn
        >
        <p></p>

        <v-btn class="justify-center" style="min-width: 150px" @click="register"
          >Registrar</v-btn
        >
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "RegisterMenu",
};
</script>