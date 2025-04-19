import './bootstrap';
import App from './components/App.vue'
import Road from './components/Road.vue';
import Landing from './components/Landing.vue';
import { createWebHistory, createRouter} from 'vue-router';
import './bootstrap'
import { createApp } from 'vue'


// Define your routes
const routes = [
  {
    path: '/',
    component:Landing

  },
  {
    name:'start',
    path: '/start',
    component:Road
    
  },

]

// Create the router
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Mount the app with the router
createApp(App)
  .use(router)
  .mount('#app')
