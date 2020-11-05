<template>
  <div class="Login pa-5">
    <v-card elevation="6" class="mx-auto pa-5" max-width="900" min-height="500">
      <v-card-title class="justify-center">Login</v-card-title>
      <v-container class="d-flex justify-center flex-column">
        <v-text-field v-model="email" label="Email" outlined></v-text-field>
        <v-text-field
          v-model="password"
          :type="'Password'"
          label="Password"
          outlined
        ></v-text-field>
      </v-container>
      <v-container class="d-flex flex-column" align-center>
        <v-btn
          class="justify-center"
          style="max-width: 300px"
          color="orange accent-2"
          @click="submit"
          dark
          large
          >Submit</v-btn
        >
        <p></p>
        <v-btn
          class="justify-center"
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

import loginServices from "../services/login.services";

export default {
  name: "Login",
  data() {
    return {
      email:"",
      password:"",
      token:""
    };
  },
  methods: {
    register() {
      this.$router.push({ name: "Register" });
    },
    async submit() {
      if(this.email!="" && this.password!=""){
        try {
          let params = {mail: this.email, password: this.password};
          let response = await loginServices.postLogin(params);
          console.log(response);
          localStorage.setItem('token',response.data);
          this.$router.push({ name: "Restaurants" });
        } catch (error) {
          console.log("Fallo el Login");
          console.log(error);
        }
      } else {
        console.log("No hay nada escrito");
      }
    }
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