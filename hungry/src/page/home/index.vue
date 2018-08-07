<template>
	<iscrollp class="home">
		<Header></Header>
		<Search></Search>
		<Banner></Banner>
	</iscrollp>
</template>
<script>
	import Banner from '../../components/home/banner.vue'
	import Header from '../../components/common/header.vue'
	import Search from '../../components/common/search.vue'

	export default {
		components:{
			Header,
			Banner,
			Search
		}
		
	}
</script>
<style scoped>
	
</style>