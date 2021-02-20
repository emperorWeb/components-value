import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/common/common.css'
import VueBus from './vue-bus'
Vue.use(VueBus)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
