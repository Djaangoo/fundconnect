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
import Button from './shared/components/Button.vue'
import Loader from './shared/components/Loader.vue'
app.component('Button', Button)
app.component('Loader', Loader)

app.mount('#app')
