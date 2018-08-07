import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from '../page/home/index.vue'
import Discover from '../page/discover/index.vue'
import Mine from '../page/mine/index.vue'
import Order from '../page/order/index.vue'

export default new Router({
  routes: [
    {
		path:'/home',
		alias:'/',
		name:'home',
		component:Home
	},
	{
		path:'/discover',
		name:'discover',
		component:Discover
	},
	{
		path:'/order',
		name:'order',
		component:Order
	},
	{
		path:'/mine',
		name:'mine',
		component:Mine
	}
  ]
})
