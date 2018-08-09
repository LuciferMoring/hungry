<template>
	<div class="iscrollpage" ref="page">
		<div class="iscroll-wrap">
			<slot/>
		</div>
	</div>
</template>
<script>
	export default {
		mounted(){
			//创建滚动式图
<<<<<<< HEAD
			let scroll = new IScroll(this.$refs.page,{probeType:3});
			scroll.on('beforeScrollStart', ()=>{
            scroll.refresh();
        })
=======
			let scroll = new IScroll(this.$refs.page,{
				probeType:3
			});
			scroll.on('beforeScrollStart',()=>{
				scroll.refresh();
			})
>>>>>>> 0eaf86f1ec08a474f45f4905b9fc1bfb471339a8
		}
	}
</script>
<style scoped>
	.iscrollpage {
		width:100%;
		position: absolute;
		top:0;
		left:0;
		bottom:49px;
		overflow: hidden;
	}
</style>