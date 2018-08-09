<template>
	<iscrollp class="home">
		<Header></Header>
		<Search></Search>
		<Banner></Banner>
		<Restaurants></Restaurants>
		
	</iscrollp>
</template>
<script>
	import Banner from '../../components/home/banner.vue'
	import Header from '../../components/common/header.vue'
	import Search from '../../components/common/search.vue'
	import Restaurants from '../../components/common/restaurants.vue'

	export default {
		components:{
			Header,
			Banner,
			Search,
			Restaurants
		}
		
	}
</script>
<style scoped>
	
</style>