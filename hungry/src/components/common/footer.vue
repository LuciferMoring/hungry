<template>
	<div class="footer">
		<ul class="nav">
			<li v-for="(item,index) in navList"  @click="choice(item.id)" :class="{active:select==item.id}">
				<span class="iconfont" :class=item.class>
					
				</span>
				<router-link :to=item.path>
					{{item.title}}
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				select:1,
				navList:[
					{title:'首页',path:'/home',class:'icon-shouye',id:"1"},
					{title:'发现',path:'/discover',class:'icon-faxian',id:"2"},
					{title:'订单',path:'/order',class:'icon-icondd1',id:"3"},
					{title:'我的',path:'/mine',class:'icon-profile',id:"4"}
				]
			}
		},
		methods:{
			choice(id){
				this.select=id;
				console.log(id)
			}
		}
	}
</script>
<style scoped>
	.nav {
		list-style: none;
		display: flex;
		width:100%;
		height:49px;
		position: fixed;
		left:0;
		bottom:0;
		line-height: 49px;
	}
	.nav li {
		flex: 1;
		height:49px;
		text-align: center;
		display: flex;
		flex-direction: column
		
	}
	.nav li a {
		color:#8e8e93;
		font-size:12px;
		height:16px;
	}
	.nav li span {
		font-size:20px;
		height:16px;
		color:#8e8e93;

	}
	li.active a,.nav li.active span {
		color:#008fff;
	}
</style>