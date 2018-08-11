<template>
	<div class="condition_wrap"   v-if="flag=showFlag"  >
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
			<ul >
				<li v-for="(item, i) in conditionArr" :key='i'>{{item.name}}</li>
			</ul>
		</p>
	
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
				showFlag:false,
				tcolor:''
				
			}
		},
		created(){
			this.$center.$on('sendY',(y)=>{
				if(y<=-451){
					this.showFlag=true
				 }else if(y>-451){
					 this.showFlag=false

				 }	
				
			})
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
		},
		methods:{
			show:function(){
				this.isShow = true;
				this.tcolor = true;
			},
			hidden(){
				this.isShow = false;
				this.tcolor = false;
			}
			
		}
	}
</script>
<style scoped>
	.condition_wrap {
		position: absolute;
		top:40px;
		left:0px;
		z-index: 4;
		width:100%;
		display: flex;
		background:#fff;
		flex-direction: column;
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
	}
	.condition_top {
		flex:1;
		display: flex;
	}
	
	.con_nav {
		width:100%;
		height:400px;
		background:rgba(0,0,0,0.5);
		font-size: 16px;
		text-indent: 20px;
	}
	.con_nav ul {
		width:100%;
		height:286px;
		background:#fff;
		border:1px solid #ccc;
		box-sizing: border-box;
	}
	.con_nav li {
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