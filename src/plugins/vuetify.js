import Vue from 'vue'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const preset = {
  icons: {
    iconfont: 'md'
  },
  theme: {
    themes: {
      light: {
        accent: '#002151',
        error: '#721c24',
        warning: '#856404'
      },
      dark: {
        primary: '#34495E'
      }
    }
  }
}

export default new Vuetify(preset)
