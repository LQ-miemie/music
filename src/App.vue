<template>
	<div id="app">
		<nav-bar></nav-bar>
		<router-view />
		<login v-if="this.$store.state.loginActive"></login>
	</div>
</template>

<script>
	import NavBar from "./components/common/navbar/NavBar.vue"
	import Login from "./components/common/login/Login.vue"
	export default {
		name: "app",
		components: {
			NavBar,
			Login
		}
	}
</script>

<style>
	@import url("./assets/css/base.css");

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}
	
</style>
