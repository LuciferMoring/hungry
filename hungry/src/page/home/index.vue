<template>
	<iscrollp class="home">
		<Header></Header>
		<Search></Search>
		<Banner></Banner>
		<Taocan></Taocan>
		<Condition></Condition>
	</iscrollp>
</template>
<script>
	import Banner from '../../components/home/banner.vue'
	import Header from '../../components/common/header.vue'
	import Search from '../../components/common/search.vue'
	import Taocan from '../../components/home/taocan.vue'
	import Condition from '../../components/common/condition.vue'
	export default {
		components:{
			Header,
			Banner,
			Search,
			Taocan,
			Condition
		}
		
	}
</script>
<style scoped>
	
</style>