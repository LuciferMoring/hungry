import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from '../page/home/index.vue'
import Discover from '../page/discover/index.vue'
import Mine from '../page/mine/index.vue'
import Order from '../page/order/index.vue'
import Search from '../page/search/index.vue'
import Food from '../page/food/index.vue'
import Dinner from '../page/dinner/index.vue'
export default new Router({
  routes: [
    {
		path:'/home',
		alias:'/',
		name:'home',
		component:Home
	},
	{
		path:'/search',
		name:'search',
		component:Search
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
	},
	{
		path:'/food/id=0',
		name:'food',
		component:Food
	},
	{
		path:'/dinner/id=1',
		name:'dinner',
		component:Dinner
	}
  ]
})
