/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
// src/plugins/vuetify.ts

import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          background: '#881A1A', // Couleur de fond en mode clair
          primary: '#1976D2',    // Couleur principale en mode clair
        },
      },
      dark: {
        colors: {
          background: '#881A1A', // Couleur de fond en mode sombre
          primary: '#BB86FC',    // Couleur principale en mode sombre
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

