<template>
  <v-app-bar color="primary" dark app>
    <v-toolbar-title>
      <MainAppBarLogo />
    </v-toolbar-title>
    <v-spacer></v-spacer>
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
  </v-app-bar>
</template>

<script>
import siteLinks from '../data/site-links'
import { ThemeToggleMixin } from '../shared/mixins/ThemeToggleMixin'
import MainAppBarLogo from '../components/MainAppBarLogo'

export default {
  components: {
    MainAppBarLogo
  },
  mixins: [
    ThemeToggleMixin
  ],
  data: () => ({
    siteLinks
  })
};
</script>
