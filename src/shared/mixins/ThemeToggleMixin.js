export const ThemeToggleMixin = {
  computed: {
    newThemeType() {
      return this.$vuetify.theme.dark ? 'Light' : 'Dark'
    }
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}