<template>
  <div class="Login pa-5">
    <v-card elevation="6" class="mx-auto pa-5" max-width="900" min-height="500">
      <v-card-title class="justify-center">Registrar Menú</v-card-title>
      <v-container class="d-flex flex-column">
        <p>Descripción</p>
        <v-text-field v-model="description" label="" outlined></v-text-field>
        <p>Ingredientes</p>
        <v-text-field v-model="ingredients" label="" outlined></v-text-field>
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
import Menu from "../services/menu.services";

export default {
  name: "RegisterMenu",
  data() {
    return {
      file: "",
      fileUrl: "",
      description: "",
      ingredients: "",
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
        this.fileUrl = response.data;
      } catch (error) {
        console.log("Error guardando imagen");
        alert("Error guardando imagen");
      }
    },
    async register() {
      if (this.description != "" && this.ingredients != "" && this.price != "" && this.fileUrl != "") {
        let params = {
          description: this.description,
          ingredients: this.ingredients,
          price: this.price,
          images: [this.fileUrl],
        };
        try {
          await Menu.postMenu(params);
          alert("Se ha creado el menu correctamente");
          this.$router.push({ name: "Account" });
        } catch (error) {
          console.log("Error registrando menu");
        }
      } else {
        alert("Complete todos los campos")
      }
    },
  },
};
</script>