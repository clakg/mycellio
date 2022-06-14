import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import setupMirage from '@/mirage/setup-server'
import vuetify from './plugins/vuetify'

/* eslint-disable */

setupMirage()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
