<template>
	<div class="Tabs">
		<!-- <el-tabs v-model="activeName" @tab-click="handleClick" class="el-tabs" >
		  <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
		  <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
		  <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
		  <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
		</el-tabs> -->
		<ul>
			<li class="tabs-item" :class="{tabsactive:count ==index}" v-for="(item,index) in tabs" @click="tabsclick(index)" >{{item.name}}</li>
		</ul>
	</div>
  
</template>
<script>
  export default {
	  name:"Tabs",
	  props:{
		  tabs:null
	  },
    data() {
      return {
		count:0
      }
    },
    methods: {
      // handleClick(tab, event) {
      //   console.log(tab, event);
      // }
	  tabsclick(index){
		  console.log(this.$route.path)
		  this.count = index
		  if(this.$route.path !== ('/home/'+this.tabs[index].path)){
		  this.$router.push('/home/'+this.tabs[index].path)
		  }
	  }
    }
  };
</script>
<style >
	.Tabs{
		width: 100%;
		margin: 0 auto;
	}
	.el-tabs{
		width: 70%;
		margin: 0 auto;
		
		
	}
	/* .el-tabs__item.is-active{
	 color: #33cc33 !important;	
	}
	.el-tabs__active-bar{
		background-color: #33CC33 !important;
	} */
	 .tabs-item{
		
		padding: 0 15px 10px 15px;
	}
	#Tabs li:hover{
		color: #33CC33;
		
	}
	.tabsactive{
		color:  #33CC33;
		border-bottom:1px solid #33CC33;
	}
</style>