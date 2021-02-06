import Vue from 'vue'
import App from './App.vue'
import router from './router/router';
import 'bootstrap';
import "./assets/scss/all.scss"



Vue.config.productionTip = false

new Vue({
  router,
  components: {App},
  render: h => h(App),
}).$mount('#app')
