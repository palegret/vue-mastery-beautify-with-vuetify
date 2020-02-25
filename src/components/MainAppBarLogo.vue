<template>
  <v-row align="center" style="width:250px">
    <v-col class="mr-0 pr-0 pl-3">
      <v-img :src="headerImageUrl" height="38" width="38" contain />
    </v-col>
    <v-col v-show="showTitle" class="ml-0 pl-0 mr-2">
      <span>Vuetify Dashboard</span>
    </v-col>
  </v-row>
</template>

<script>
import assetDataUrls from '../data/asset-data-urls';

export default {
  computed: {
    headerImageUrl() {
      const headerImage = assetDataUrls.find(u => u.label === 'Header');
      return headerImage ? headerImage.url : '';
    },
    showTitle() {
      return this.$vuetify.breakpoint.mdAndUp;
    }
  }
};
</script>
