<template>
  <div class="Login pa-5">
    <v-card
      elevation="6"
      class="mx-auto pa-5"
      max-width="1000"
      min-height="500"
    >
      <v-card-title class="justify-center">Login</v-card-title>
      <v-container class="d-flex justify-center flex-column">
        <v-text-field label="Email" outlined></v-text-field>
        <v-text-field
          :type="'Password'"
          label="Password"
          outlined
        ></v-text-field>
        <div class="d-flex justify-center flex-column">
          <v-btn @click="home" elevation="4" color="orange accent-2" dark large>Submit</v-btn>
        </div>
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
</style>