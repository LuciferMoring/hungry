
<template>
	<div class="home">
		<Conditionhide></Conditionhide>
		<iscrollp class="home">
			<Header></Header>
			<Search></Search>
			<Banner></Banner>		
			<Taocan></Taocan>
			<Condition></Condition>
			<Restaurants></Restaurants>
		</iscrollp>
		<Footer></Footer>
	</div>
	
</template>
<script>

	import Banner from '../../components/home/banner.vue'
	import Header from '../../components/common/header.vue'
	import Search from '../../components/common/search.vue'
	import Restaurants from '../../components/common/restaurants.vue'
	import Taocan from '../../components/home/taocan.vue'
	import Condition from '../../components/common/condition.vue'
	import Footer from '../../components/common/footer.vue'
	import Conditionhide from '../../components/common/conditionhide.vue'
	export default {
		components:{
			Header,
			Banner,
			Search,
			Restaurants,
			Taocan,
			Condition,
			Footer,
			Conditionhide
		}
		
	}
</script>
<style scoped>
	
</style>