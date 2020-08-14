import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index'
import NavBar  from "./components/NavBar";
import NavCharts from "./components/NavCharts"

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('NavBar', NavBar)
Vue.component('NavCharts', NavCharts)

Vue.use(VueAxios, axios)
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
