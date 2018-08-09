<template>
	<div class="search">
		<div class="sear">
			<router-link to=''>
				
			<span class="iconfont">&#xe621;</span>
			<input type="text" placeholder="搜索饿了么商家,商品名称">
			</router-link>
		</div>
	</div>
</template>
<script>
	export default{
		
	}
</script>
<style scoped>
	.search {
		position: absolute;
		top:40px;
		left:0;
		height:40px;
		width: 100%;
		background:#008cff;
		z-index: 9;
		line-height: 40px;
	}
	.search .sear {
		position: relative;
		height:40px;
		width:350px;
		
		margin: 0 auto;
	}
	.search .sear input {
		width:100%;
		height:30px;
		line-height: 30px;
		text-align: center;
		
		border:none;
		outline: none;
	}
	.search .sear span {
		position: absolute;
		top:50%;
		left:50px;
		transform: translateY(-50%);
		font-size: 14px;
	}
</style>