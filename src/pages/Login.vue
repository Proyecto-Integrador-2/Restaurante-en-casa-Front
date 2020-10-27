<template>
  <div class="Login pa-5">
    <v-card elevation="6" class="mx-auto pa-5" max-width="900" min-height="500">
      <v-card-title class="justify-center">Login</v-card-title>
      <v-container class="d-flex justify-center flex-column">
        <v-text-field label="Email" outlined></v-text-field>
        <v-text-field
          :type="'Password'"
          label="Password"
          outlined
        ></v-text-field>
        <v-btn style="max-width: 300px" color="orange accent-2" dark large
          >Submit</v-btn
        >
        <p></p>
        <v-btn
          style="max-width: 300px"
          @click="register"
          color="orange accent-2"
          dark
          large
          >Register</v-btn
        >
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {
    home() {
      this.$router.push({ name: "Home" });
    },
    register() {
      this.$router.push({ name: "Register" });
    },
  },
};
</script>

<style scoped>
.Login {
  background: #eceff1;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.v-container { 
  justify-items: center !important;
}
</style>