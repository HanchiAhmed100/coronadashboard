import Vue from 'vue'
import App from './App.vue'
import VueZoomer from 'vue-zoomer'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'uikit/dist/js/uikit-icons.min.js';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min.js';

Vue.use(VueZoomer)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
