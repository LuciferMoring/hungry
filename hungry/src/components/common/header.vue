<template>
	<div class="header">
		<span class="iconfont posi">&#xe634;</span><p class="address">福中三路深圳市民中心</p><span class="posi2">▼</span>
	</div>
</template>
<script>
	export default {
		
	}
</script>
<style scoped>
	.header{
		display: flex;
		height:40px;
		width:100%;
		position: absolute;
		top:0;
		left:0;
		line-height: 40px;
		padding-left: 10px;
		color:#fff;
		background:#008cff;
		z-index: 9;
	}
	.posi {
		font-size:18px;
	}
	.address {
		width:100px;
		font-size: 14px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.posi2 {
		font-size:16px;
	}
</style>