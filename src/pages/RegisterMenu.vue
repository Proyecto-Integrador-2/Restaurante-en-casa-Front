<template>
  <div class="Login pa-5">
    <v-card elevation="6" class="mx-auto pa-5" max-width="900" min-height="500">
      <v-card-title class="justify-center">Registrar Menú</v-card-title>
      <v-container class="d-flex flex-column">
        <p>Descripción</p>
        <v-text-field v-model="description" label="" outlined></v-text-field>
        <p>Ingredientes</p>
        <v-text-field v-model="ingretients" label="" outlined></v-text-field>
        <p>Precio</p>
        <v-text-field v-model="price" label="" outlined></v-text-field>

        <p>Subir una imagen</p>
        <input
          type="file"
          id="file"
          ref="file"
          v-on:change="handleFileUpload()"
        />
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
import Images from "../services/images.services";

export default {
  name: "RegisterMenu",
  data() {
    return {
      file: "",
      fileUrl: "",
      description: "",
      ingretients: "",
      price: "",
    };
  },
  methods: {
    async handleFileUpload() {
      this.file = this.$refs.file.files[0];
      let fd = new FormData();
      fd.append("image", this.file);
      try {
        let response = await Images.postImage(fd);
        console.log(response);
      } catch (error) {
        console.log("Error guardando imagen");
      }
    },
    register() {
      console.log("Registradooooo");
    },
  },
};
</script>