import Vue from 'vue'
import App from './App'
import router from './router'
import iscrollpage from './components/common/iscrollpage.vue'
Vue.config.productionTip = false
Vue.component('iscrollp',iscrollpage)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
