<template>
	
		<div class="swiper-container" ref='banner'>
			<div class="swiper-wrapper">
				<div class="swiper-slide">Slide 1</div>
				<div class="swiper-slide">Slide 2</div>
				<div class="swiper-slide">Slide 3</div>
			</div>
			
			<div class="swiper-pagination"></div>
			
		</div>
	
</template>
<script>
	export default {
		mounted(){
			var mySwiper = new Swiper (this.$refs.banner, {
				direction: 'horizontal',
				loop: true,
				pagination: '.swiper-pagination',
				
			  })
		}
	}
</script>
<style scoped> 
	.swiper-container {
		width:100%;
		height:150px;
		background:red;
		position: absolute;
		top:80px;
		left:0;
		
	}
</style>