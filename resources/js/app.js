import './bootstrap';
import App from './components/App.vue'
import { createWebHistory, createRouter} from 'vue-router';
import './bootstrap'
import { createApp } from 'vue'


// Define your routes
const routes = [
  {
    path: '/',
    component: () => import('./components/App.vue') // lazy load Home.vue

  },
  {
    path: '/start',
    component: () => import('./components/Road.vue') // lazy load Home.vue
    
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
