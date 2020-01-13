import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import MainPage from './pages/MainPage';
import EventDetail from './pages/EventDetail';
import VueAxios from "vue-axios";
import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_URL || 'http://localhost:3000';
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter)


const routes = [
  { path: '/event/:id', component: EventDetail },
  { path: '/', component: MainPage }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
