import Vue from 'vue'
import App from './App'
import router from './router'

import iscrollpage from './components/common/iscrollpage.vue'
Vue.component('iscrollp',iscrollpage)

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
