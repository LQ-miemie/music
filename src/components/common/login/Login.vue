<template>
	<div id="login">
		
		
		<div class="login-box">
			<span class="login-off" @click="loginOff()">X</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Login",
		data() {
			return {
				
			}
		},
		created() {
		
		},
		computed: {
			
		},
		methods: {
			loginOff() {
				this.$store.commit("changeActive2")
			}
			
			
		}






	}
</script>

<style>
	#login {
		width: 100%;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.3);
		position: fixed;
		top: 0;
		z-index: 1000;
	}

	.login-box {
		width: 1000px;
		height: 500px;
		background-color: white;
		border-radius: 10px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%)
	}

	.login-off {
		position: absolute;
		top: 5px;
		right: 5px;
	}

	.login-off:hover {
		cursor: pointer;
	}
	
	
	
	
</style>
