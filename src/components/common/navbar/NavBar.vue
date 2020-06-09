<template>
	<div class="navbar">
		<div class="left"><img src="../../../assets/img/logo.png" alt=""></div>
		<div class="center" >
			<span v-for="(item,index) in nav" :key="index"			
			 :class="{active:index==currentIndex,mouse:currentIndex2===index}"			 
			  @click="itemclick(index)"
			  @mouseover="fun(index)"
			  @mouseout="currentIndex2=null" >
				{{item}}
			</span>
		</div>
		<div class="right">
			<div class="search">
				<el-input placeholder="搜索音乐/MV/歌单/用户" v-model="input3" class="input-with-select">
					<el-button slot="append" icon="el-icon-search"></el-button>
				</el-input>
			</div>			
			<div class="login" >
				<el-button type="text" @click="loginActive()">登录</el-button>
				<el-button type="success">开通绿钻豪华版</el-button>
				<el-button>开通付费包</el-button>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: "NavBar",
		data() {
			return {
				nav: ["音乐馆", "我的音乐", "客户端", "开放平台", "VIP"],
				currentIndex: 0,
				currentIndex2: null,
				path: ["/home", '/about','/client','/artists','/vip'],
				input3: '',
				ismouse:false
			}

		},
		methods: {
			itemclick(index) {
				//改变被选中导航颜色
				this.currentIndex = index
				this.currentIndex2 = null
				//点击跳转到相应页面,判断点击的是否是当前页面，如果不是，就push（重复点击会报错）
				if(this.$route.path !== this.path[index]){this.$router.push(this.path[index])}
				
			},
			fun(index){				
				this.currentIndex != index?this.currentIndex2=index : this.currentIndex2 = null
				
			},
			loginActive(){
				this.$store.commit("changeActive")
			}
		}
	}
</script>

<style>
	.navbar {
		width: 100%;
		height: 90px;
		/* position: relative; */
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid rgba(0,0,0,0.1);
		
		
		
	}
	.navbar .left  img{
		height: 50px;
	}

	.center {
		width: 500px;
		line-height: 50px;
		display: flex;
		align-items: center;
	}

	.center span {
		flex: 1;
		height: 90px;
		line-height: 90px; 
		overflow: hidden;
		cursor: pointer;
	}
	
	.active {
		background-color: #33cc33;
		color: white;
	}
	
	.mouse{
		color:  #33cc33;
	}

	.right {		
		display: flex;
		align-items: center;
		
	}
	
	.navbar .login{
		margin-left: 15px;
		
	}
	
	.navbar .login span{
		font-size: 10px;		
	}
	
	.input-with-select {
		width: 100%;
		
	}

	.input-with-select .el-input-group__prepend {
		background-color: #fff;
	}
</style>
