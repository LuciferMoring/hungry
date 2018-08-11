
<template>
	<div class="home" >
		<Conditionhide></Conditionhide>
		<iscrollp class="home" :onscroll="gundong" ref="page">
			<Header></Header>
			<Search></Search>
			<Banner></Banner>		
			<Taocan></Taocan>
			<Condition></Condition>
			<ul>
				<li v-for="(item,index) in restaurants" :key='index' >

					<Store :item=item></Store>

				</li>
			</ul>
		</iscrollp>
		<Footer></Footer>
	</div>
	
</template>
<script>

	import Banner from '../../components/home/banner.vue'
	import Header from '../../components/common/header.vue'
	import Search from '../../components/common/search.vue'
	import Taocan from '../../components/home/taocan.vue'
	import Condition from '../../components/common/condition.vue'
	import Store from '../../components/common/store.vue'
	import {getRestaurants} from '../../../service/service.js'
	import Footer from '../../components/common/footer.vue'
	import Conditionhide from '../../components/common/conditionhide.vue'
	export default {
		components:{
			Header,
			Banner,
			Search,
			Taocan,
			Condition,
			Footer,
			Conditionhide,		
			Store
		},
		 data(){
        return{
			restaurants:[],
			datanum:0,
			isLaod:false           
			}
		},  
		methods:{
			getdata(){
				getRestaurants(this.datanum).then(result=>{      
					this.restaurants=[...this.restaurants,...result];
					this.$nextTick(()=>{
                    //更新dom
					this.$refs.page.refreshDOM();
					this.datanum=this.datanum+8;
					this.isLaod=false					
					})
					
				})
			},
			gundong(y){
				if(y<50 && (!this.isLaod)){
					this.isLaod=true
					this.getdata();
				}
			}
		},
		mounted(){
			this.getdata();
		}		
	}
</script>
<style scoped>
li{
    border-bottom:1px solid #eee;
}	
</style>