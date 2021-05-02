import { createApp } from 'vue'
import App from './App.vue'
import router from './core/router'
import store from './core/store'
import './assets/tw.css'
import './assets/styles/base.scss'

const app = createApp(App)

app.use(store)
app.use(router)

// global components
import Butt from './shared/components/Butt.vue'
app.component('Butt', Butt)

app.mount('#app')
