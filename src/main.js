import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import i18n from './lang/index'
import 'normalize.css/normalize.css'
import './icons' // icon
import _ from 'lodash'
Vue.prototype._ = _

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
