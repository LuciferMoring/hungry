import Vue from 'vue'
import App from './App'
import router from './router'

Vue.prototype.$center = new Vue()
import iscrollpage from './components/common/iscrollpage.vue'
Vue.component('iscrollp',iscrollpage)

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
