import { createApp } from 'vue'
import App from './App.vue'
import router from './core/router'
import store from './core/store'
import './assets/tw.css'
import './assets/styles/base.scss'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VueHighcharts from 'vue3-highcharts'

// global components
import Button from './shared/components/Button.vue'
import Loader from './shared/components/Loader.vue'

const app = createApp(App)

app.use(VueHighcharts)
app.use(router)
app.use(store)
app.use(VueAxios, axios)

app.component('Button', Button)
app.component('Loader', Loader)

app.mount('#app')
