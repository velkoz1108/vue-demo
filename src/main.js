import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHistory} from 'vue-router'
import routes from './routes'
import GlobalButton from './components/GlobalButton.vue'

const app = createApp(App)
const history = createWebHistory();
const router = createRouter({history,routes});

app.use(router)
app.component('global-button',GlobalButton)

app.mount('#app')