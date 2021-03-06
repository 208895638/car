import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
Vue.config.productionTip = false
import Mock from "mockjs";
Vue.prototype.mock = Mock;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
