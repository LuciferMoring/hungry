<template>
	<div class="iscrollpage" ref="page">
		<div class="iscroll-wrap">
			<slot/>
		</div>
	</div>
</template>
<script>
	// import Vue from 'vue'
	// Vue.prototype.$center = new Vue()
	export default {
		props:{
			onscroll:Function
		},
		methods: {
			refreshDOM(){
				this.scroll.refresh();
			}
			
		},
		data(){
			return{
				datay:0
			}
		},
		mounted(){
			//创建滚动式图
			let scroll = new IScroll(this.$refs.page,{
				probeType: this.onscroll?3:0,
				scrollbars: true,
				fadeScrollbars:true,
			});
			this.scroll = scroll;

			scroll.on('beforeScrollStart', ()=>{
				scroll.refresh();
			})
			
			scroll.on('scroll',()=>{
				let disY=scroll.y-scroll.maxScrollY;
				this.onscroll(disY);
				this.$center.$emit('sendY',scroll.y)
				// Vue.prototype.$center.$emit('sendY',scroll.y)				
			})

			this.$center.$on('clickcon',(y)=>{
				scroll.scrollTo(0,-y)
				
			})
		}
	}
</script>
<style scoped>
	.iscrollpage {
		width:100%;
		position: absolute;
		top:0;
		left:0;
		bottom:49px;
		overflow: hidden;
	}
</style>