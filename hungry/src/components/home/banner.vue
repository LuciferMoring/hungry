<template>
		<div class="swiper-container" ref='banner'>
			<div class="swiper-wrapper">
				<div class="swiper-slide">
						<p v-for="item in bannerList1">
							<router-link to="">
								<img :src=item.src>
								{{item.name}}
							</router-link>
	
						</p>
				</div>
				<div class="swiper-slide">
						<p v-for="item in bannerList2">
							<router-link to="">
								<img :src=item.src>
								{{item.name}}
							</router-link>
							
						</p>
				</div>
				
			</div>
			
			<div class="swiper-pagination"></div>
			
		</div>
	
</template>
<script>
	import {getBannerData1,getBannerData2} from '../../../service/service.js'
	export default {
		data(){
			return {
				src:'',
				bannerList1:[],
				bannerList2:[]
			}
		},
		mounted(){
			 this.mySwiper = new Swiper (this.$refs.banner, {
				direction: 'horizontal',
				loop: true,
				pagination: '.swiper-pagination',
			  })
			 
			let p1 = getBannerData1()
			p1.then(res=>{
				this.bannerList1=res
			})
			let p2 = getBannerData2()
			p2.then(res=>{
				this.bannerList2=res
			})
		},
		updated(){
			this.mySwiper.update();
			this.mySwiper.reLoop();
			this.mySwiper.slideTo(1,0);
		}	
	}
</script>
<style scoped> 
	.swiper-container {
		width:100%;
<<<<<<< HEAD
		height:150px;
		background:red;
		padding-top: 80px;
		
=======
		height:200px;
		/* background:red; */
		padding-top:80px;
		}
	.swiper-slide {
		display: flex;	
		width:100%;
		flex-wrap: wrap;
		justify-content: flex-start;
	}
	.swiper-slide p {
		flex:20%;
		font-size:12px;
		text-align: center;
	
	}
	.swiper-container p a {
		color:#000;
		display: block;
		width:100%;
	}
	.swiper-container .swiper-slide p a img {
		width:45px;
		height:45px;
		padding-left:10px;

>>>>>>> 0eaf86f1ec08a474f45f4905b9fc1bfb471339a8
	}
</style>