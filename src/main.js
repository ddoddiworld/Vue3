import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './routes/routes'
import store from './store/store'

loadFonts()

const app = createApp(App)
  app.use(vuetify)
  app.use(router)
  app.use(store)
  app.mount('#app')

