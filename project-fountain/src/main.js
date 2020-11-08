import Vue from 'vue'
import App from './App.vue'
import vb from 'vue-babylonjs'
import Vuex from 'vuex'
import store from './store'
import modules from './store/modules'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')

Vue.use(vb);
Vue.use(Vuex);