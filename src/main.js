import Vue from 'vue'
import App from './components/App.vue'
import router from './router/router';
import store from './router/store';

import 'jquery/src/jquery';
import 'bootstrap';

import * as uiv from 'uiv'
Vue.use(uiv)

import 'fontawesome-4.7';
import "./assets/scss/all.scss";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  components: {App},
  render: h => h(App),
}).$mount('#app')
