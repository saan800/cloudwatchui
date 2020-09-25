import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#f36d00',
        secondary: colors.blue.base,
        accent: colors.grey.base
      }
    }
  }
})

export default vuetify
