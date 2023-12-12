import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vSelect from "vue-select";

const app = createApp(App)

app.use(router)
app.use(bootstrap)
app.component("v-select", vSelect)
app.mount('#app')
