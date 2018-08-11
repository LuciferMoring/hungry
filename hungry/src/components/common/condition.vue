<template>
	<div class="condition_wrap"  :style="{top:T}">
		<div class="condition" >
			<div class="condition_top">
				<p class="zonghe" :class="{c_active:tcolor==true}"  @click="show()">
					综合排序▼
				</p>
				<p class="other" v-for="(item,index) in conditionArr2" :key='index'>{{item.name}}</p>
				<p class="choice">筛选</p>
			</div>
		</div>
		<p class="con_nav" v-show='isShow'  @click="hidden()">
		</p>
			<ul v-show='isShow'>
				<li v-for="(item, i) in conditionArr" :key='i'>{{item.name}}</li>
			</ul>
		
	
	</div>
</template>
<script>
	import {getConditionData,getConditionData2} from '../../../service/service.js'
	export default {
		data(){
			return {
				conditionArr:[],
				conditionArr2:[],
				isShow:false,
				flag:'',
				tcolor:'',
				T:''				
			}
		},
		mounted(){
			let p3 = getConditionData()
			p3.then(res=>{
				this.conditionArr = res;
				})
			let p4 = getConditionData2()
			p4.then(res=>{
				this.conditionArr2=res;
			})
			this.$center.$on('sendY',(y)=>{
				if(y<=-450){
					this.T=(-y)+'px';
				}else{
					this.T='450px'
				}
							
			})
		},
		methods:{
			show(){
				this.isShow = true;
				this.tcolor = true;
				this.$center.$emit("clickcon",450)
			},
			hidden(){
				this.isShow=false;
			}
		}
	}
</script>
<style scoped>
	.condition_wrap {
		width:100%;
		display: flex;
		flex-direction: column;
		position: absolute;
		left: 0;
		top: 450px;
		z-index: 10;
	}
	.condition {
		width:100%;
		height:38px;
		flex: 1;
		display: flex;
		line-height: 38px;
		color:#7c7c7c;
		border:1px solid #f3f3f3;
		box-sizing: border-box;
		flex-direction: column;
		background: #fff;
	}
	.condition_top {
		flex:1;
		display: flex;
	}
	
	.con_nav {
		width:100%;
		height:1000px;
		background:rgba(0,0,0,0.5);
		z-index:10;
		position: absolute;
		top:38px;
		left: 0;
	}
	ul{
		font-size: 16px;
		text-indent: 20px;
		width:100%;
		height:286px;
		background:#fff;
		border:1px solid #ccc;
		box-sizing: border-box;
		z-index: 20;
	}
	li{
		height:36px;
		line-height: 36px;;
	}
	.condition .zonghe,.condition .other,.condition .choice {
		flex:30%;
		text-align: center;
		font-size:14px;
	}
	.active {
		position:absolute;
		top:80px;
		left:0;
		background:#fff;
		z-index: 2;	
	}
	.c_active {
		color:#3492e8;
	}


</style>