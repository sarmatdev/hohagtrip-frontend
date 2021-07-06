import { createApp } from 'vue'
import GAuth from 'vue3-google-oauth2'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './styles/tailwind.css'
import './styles/normalize.scss'
import { registerBaseComponents } from '@/helpers/registerBaseComponents'
import loadPlugins from './helpers/loadPlugins'

export const app = createApp(App)

// Register base components
registerBaseComponents(app)

const gAuthOptions = {
  clientId:
    '10570278385-n48hnsejapfbs0hm1jd7u6ucqrb0q2ho.apps.googleusercontent.com',
  prompt: 'consent',
  fetch_basic_profile: true,
}

loadPlugins(['litepie-datepicker'])

app.use(GAuth, gAuthOptions)

app.use(store).use(router).mount('#app')
