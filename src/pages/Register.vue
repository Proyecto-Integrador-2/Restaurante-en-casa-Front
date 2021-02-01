<template>
  <div class="Login pa-5">
    <v-card elevation="6" class="mx-auto pa-5" max-width="900" min-height="500">
      <v-card-title class="justify-center">Registro</v-card-title>
      <v-container class="d-flex justify-center flex-column">
        <v-text-field
          v-model="name"
          label="Nombre Completo"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="mail"
          label="Correo Electrónico"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="number"
          label="Número de celular"
          type="number"
          outlined
        ></v-text-field>
        <v-select
          v-model="documentType"
          :items="items"
          label="Tipo de Documento"
          type="text"
          outlined
          return-object
        ></v-select>
        <v-text-field
          v-model="nrDocument"
          label="Número de Documento"
          type="number"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Contraseña"
          outlined
        ></v-text-field>
        <v-text-field label="Repita la Contraseña" outlined></v-text-field>
      </v-container>
      <v-container class="d-flex flex-column ma-3" align-center>
        <v-btn
          class="justify-center"
          style="max-width: 300px"
          @click="register"
          color="#7CB342"
          dark
          large
          align-center
          >Registrar</v-btn
        >
      </v-container>
    </v-card>
  </div>
</template>

<script>
import loginServices from "../services/login.services";

export default {
  data() {
    return {
      name: "",
      mail: "",
      number: "",
      documentType: "",
      nrDocument: "",
      password: "",
      items: [
        "Tarjeta de Identidad",
        "Cédula de Ciudadania",
        "Cédula de Extrangeria",
        "Pasaporte",
      ],
    };
  },
  methods: {
    async register() {
      try {
        if (this.documentType == "Cédula de Ciudadania") {
          this.documentType = 1
        }
        if (this.documentType == "Cédula de Extrangeria") {
          this.documentType = 2
        }
        if (this.documentType == "Pasaporte") {
          this.documentType = 3
        }
        let params = {
          name: this.name,
          mail: this.mail,
          number: this.number,
          documentType: this.documentType,
          nrDocument: this.nrDocument,
          password: this.password,
        };
        await loginServices.postUser(params);
        alert("Se ha creado el usuario correctamente");
        this.$router.push({ name: "Login" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>