import Vue from 'vue'
import App from './App.vue'
import VueZoomer from 'vue-zoomer'

Vue.use(VueZoomer)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
