<template>
	<div class="taocan_wrap">
		<div  class="taocan">
			<div class="tc">
				<h1 class="title">品质套餐</h1>
				<p class="des">搭配齐全吃得好</p>
				<p class="go_left">立即抢购></p>
				<img src="../../../static/img/left.png" alt="">
			</div>
			<div class="limit">
				<h1 class="title">限量抢购</h1>
				<p class="des">超值美味9.9元起</p>
				<p class="go_right"><span>3228人</span>正在抢></p>
				<img src="../../../static/img/right.png" alt="">
			</div>
		</div>
		<p class="intro">-推荐商家-</p>
	</div>
</template>
<script>
	export default {
		
	}
</script>
<style scoped>
	.taocan_wrap {
		display: flex;
		flex-direction: column;
		width:100%;
	}
	.taocan {
		display: flex;
		flex:1;
		height:140px;
		margin:0 auto;
		justify-content: space-around;
	}
	.taocan .tc,.taocan .limit {
		width:50%;
		height:140px;
		background:#f9f9f9;
		padding-left:10px;
	}
	.taocan .limit {
		margin-left:5px;
	}
	.taocan .limit .title {
		color:red;
	}
	.taocan .tc .go_left {
		color:#bc987c;
		font-size: 12px;
	}
	.taocan .tc .title,.taocan .limit .title {
		font-size: 16px;
		font-weight: bold;
		margin-top:14px;
	}
	.taocan .tc img,.taocan .limit img {
		width:112px;
		margin-left:48px ;
	}
	.taocan .limit span {
		color:red;
	}
	.taocan .limit .go_right {
		font-size: 12px;
	}
	.taocan .tc .des,.taocan .limit .des {
		font-size: 14px;
		color:#777777;
	}
	.intro {
		width:100%;
		text-align: center;
		padding-top:10px; 
	}
</style>