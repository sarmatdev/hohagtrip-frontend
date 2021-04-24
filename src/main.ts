import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './styles/tailwind.css'
import { registerBaseComponents } from '@/helpers/registerBaseComponents'

export const app = createApp(App)

// Register base components
registerBaseComponents(app)

app.use(store).use(router).mount('#app')
