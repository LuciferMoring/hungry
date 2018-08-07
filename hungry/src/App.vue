<template>
  <div id="app">
		
	  <!--匹配路由组件:-->
		<router-view></router-view>
		<!--匹配footer-->
		<Footer></Footer>
  </div>
</template>

<script>
	import Footer from './components/common/footer.vue'
	export default {
		components:{
			Footer
	},
    name: 'App'
}
</script scoped>

<style>

</style>
