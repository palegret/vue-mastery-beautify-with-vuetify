<template>
  <v-footer color="primary lighten-1" padless dark>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in siteLinks"
        :key="`${link.label}-footer-link`"
        :to="link.url"
        text
        small
        rounded
        class="my-2 mx-1"
      >{{ link.label }}</v-btn>
      <v-btn 
        text
        small
        rounded
        class="my-2 mx-1"
        @click="toggleTheme"
      ><v-icon class="pr-2">web</v-icon>{{newThemeType}}</v-btn>
      <v-col cols="12" class="primary lighten-2 py-4 text-center white--text">
        {{ copyrightYear }} —
        <strong>Vuetify Dashboard</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import siteLinks from '../data/site-links'
import { ThemeToggleMixin } from '../shared/mixins/ThemeToggleMixin'

export default {
  mixins: [
    ThemeToggleMixin
  ],
  data: () => ({
    siteLinks
  }),
  computed: {
    copyrightYear() {
      return new Date().getFullYear();
    }
  }
};
</script>
