<template>
	<div class="ad">
		<img src="../../../assets/img/logo.png" alt="" class="ad-logo">
		<span>千万高品质歌曲</span>
		<div class="ad-footer"><img src="../../../assets/img/logo/do-windows.png" alt="">客户端下载</div>
	</div>
</template>

<script>
	export default{
		name:"AD"
	}
</script>

<style>
	.ad{
		position: fixed;
		top: 20%;
		right: 3%;
		z-index: 1000;		
		background-color: white;
		border-radius: 5px;
		padding: 10px 20px;
		box-shadow: 2px 2px 2px rgba(0,0,0,0.1);
		font-size: 12px;
	}
	.ad-logo{
		height: 30px;
	}
	.ad span{
		display: block;
		padding: 10px 0;
		color: rgba(0,0,0,0.5);
	}
	.ad-footer {
		height: 20px;
		background-color: #33CC33;
		border-radius: 15px;
		padding: 0 20px;
		color: white;
	}
	.ad-footer img{
		height: 100%; 
		vertical-align: middle;
	}
</style>
