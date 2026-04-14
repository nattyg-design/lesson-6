import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#f3e8ff',
          surface: '#f8f0ff',
          primary: '#7c5ba8',
          purple: '#7c5ba8',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#1a1028',
          surface: '#1e1832',
          primary: '#a87cdb',
          purple: '#a87cdb',
        },
      },
    },
  },
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
