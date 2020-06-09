<template>
	<div class="singerhander">
		<div class="title"> <span>万千歌手</span><span>尽在眼前</span></div>
		<span class="title2">登录查看你喜欢的歌手</span>
		<span class="login" @click="loginActive()">立即登录</span>
	</div>
</template>

<script>
	export default{
		name:"SingerHander",
		methods:{
			loginActive(){
				this.$store.commit("changeActive")
			}
		}
	}
</script>

<style >
	.singerhander{
		background: url(../../../assets/img/singer_list/bg_singer.jpg);
		/* background-size:100% 100%; */
		height: 370px;
		width: 100%;
	}
	.singerhander .title{
		padding-top: 100px;
	}
	.singerhander .title span{
		padding: 0 30px;
		font-size: 50px;
		color: white;
	}
	.singerhander .title2{
		display: block;
		padding: 50px 0;
		font-size: 26px;
		color:white
	}
	.singerhander .login{
		
		padding: 15px 50px;
		color:white;
		border: 1px solid rgba(255,255,255,0.5) ;
		border-radius: 5px;
	}
	.singerhander .login:hover{
		border: 1px solid white;
		cursor:pointer
	}
</style>
