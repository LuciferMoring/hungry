<template>
	<div class="search">
		<div class="header">
				<span>
					<router-link to="/home">
						<			
					</router-link>
				</span>
			<div class="sear">
				<b class="iconfont">&#xe621;</b>
				<input type="text" placeholder="搜索商家,商品名称">
				<strong>搜索</strong>
			</div>
		</div>
		<h1>热门搜索</h1>
		<ul class="hotword">
			<li v-for="item in hotList">{{item.name}}</li>
		</ul>
	</div>
</template>
<script>
	import {getHotData} from '../../../service/service.js'

	export default {
		data(){
			return {
				hotList:[]
			}
		},
		mounted(){
			let p5 = getHotData();
			p5.then(res=>{
				this.hotList=res
			})
		}
	}
</script>
<style scoped>
	.header {
		width:100%;
		height:50px;
		line-height: 30px;
		display: flex;
		margin-top: 10px;
		justify-content: space-between;
	}
	.header span {
		flex:10%;
		height:50px;
		font-size: 20px;
		display: block;
		text-align: center;
	}
	.header .sear {
		display: flex;
		height:50px;
		flex:90%;
		position: relative;
		justify-content: space-between;
	}
	.sear b {
		position: absolute;
		left:15px;
	}
	.sear input {
		height:30px;
		width:276px;
		flex:80%;
		background:#f8f8f8;
		border:none;
		outline: none;
		text-indent: 35px;
	}
	.sear strong {
		flex: 20%;
		text-align: center;
	}
	.search h1 {
		width:100%;
		font-size: 16px;
		font-weight: bold;
		padding-left:10px;
		color:#9a9a9a;
	}
	.hotword {
		width: 100%;
		display: flex;	
		flex-wrap: wrap;
		margin-top: 5px;
	}
	.hotword li {
		height:10px;
		background:#f7f7f7;
		line-height:10px;
		padding:10px 5px;
		margin:15px 0 0 10px;
		text-align: center;
		border-radius: 5px;
		font-size: 14px;
		color:#666;
	}
</style>