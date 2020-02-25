<template>
  <v-container class="text-center primary--text">
    <v-row>
      <v-col cols="12">
        <h3 class="title text-uppercase">Welcome to</h3>
        <h1 class="display-3">Vuetify Dashboard</h1>
      </v-col>      
    </v-row>
    <v-row justify="center">
      <v-spacer></v-spacer>
      <v-col cols="8" lg="4">
        <v-img :src="homeImageUrl" />
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
import assetDataUrls from "../data/asset-data-urls";

export default {
  computed: {
    homeImageUrl() {
      const homeImage = assetDataUrls.find(u => u.label === 'Home');
      return homeImage ? homeImage.url : '';
    }
  }  
}
</script>
