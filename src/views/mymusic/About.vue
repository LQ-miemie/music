<template>
  <div class="mymusic">
	  <div class="mymusic-login" v-if="true">
		  <div style="color: white;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);width: 1000px;">
			  <p style="font-size: 70px;">私人音乐空间，听我想听的音乐</p>
			  <p style="font-size: 40px;" >登录管理我的音乐，多终端同步</p>
			  <span class="login"  @click="loginActive()">立即登录</span>
		  </div>
	  </div>
	  
    
	<Footer></Footer>
  </div>
</template>
<script>
	import Footer from '../../components/common/footer/Footer.vue'
	export default{
		name:"About",
		components:{
			Footer
		},
		methods:{
			loginActive(){
				this.$store.commit("changeActive")
			}
		}
		
	}
</script>
<style>
	.mymusic-login{
		
		height: 100vh;
		background: url(../../assets/img/client/bj3.png);
	}
	.mymusic-login .login{
		
		padding: 15px 50px;
		color:white;
		border: 1px solid rgba(255,255,255,0.5) ;
		border-radius: 5px;
	}
	.mymusic-login .login:hover{
		border: 1px solid white;
		cursor:pointer
	}
	
</style>
