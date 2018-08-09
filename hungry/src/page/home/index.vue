<template>
	<iscrollp class="home">
		<Header></Header>
		<Search></Search>
		<Banner></Banner>		
		<Taocan></Taocan>
		<Condition></Condition>
		<Restaurants></Restaurants>
	</iscrollp>
</template>
<script>
	import Banner from '../../components/home/banner.vue'
	import Header from '../../components/common/header.vue'
	import Search from '../../components/common/search.vue'
	import Restaurants from '../../components/common/restaurants.vue'
	import Taocan from '../../components/home/taocan.vue'
	import Condition from '../../components/common/condition.vue'
	export default {
		components:{
			Header,
			Banner,
			Search,
			Restaurants,
			Taocan,
			Condition
		}
		
	}
</script>
<style scoped>
	
</style>