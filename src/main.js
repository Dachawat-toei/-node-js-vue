/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
//import dayjs from 'dayjs'
//import 'roboto-fontface/css/roboto/roboto-fontface.css'
//import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
// Vue.prototype.$dayjs = dayjs
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:3000'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
