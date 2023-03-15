/** Store and App init **/
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap'
import Axios from 'axios'
import App from './App.vue'
import router from './router'

Axios.defaults.baseURL = 'https://api.zberridge.com/wp-json/zb/v1/';
Axios.defaults.headers.post['Content-Type'] = 'application/json';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#portfolio')
