<template>
	<div class="home">
		<el-container>
			<el-header>
				<tabs class="home-tabs" :tabs="hometabs"></tabs>
			</el-header>

			<router-view></router-view>
			<a-d></a-d>


			<Footer></Footer>

		</el-container>
			<el-backtop  :bottom="100">
		   <div
		     style="{
		       height: 100%;
		       width: 100%;
		       background-color: #f2f5f6;
		       box-shadow: 0 0 6px rgba(0,0,0, .12);
		       text-align: center;
		       line-height: 40px;
		       color: #1989fa;
							z-index: 1000;
		     }"
		   >
		     UP
		   </div>
		 </el-backtop>

	</div>
</template>

<script>
	// @ is an alias to /src
	// import HelloWorld from '@/components/HelloWorld.vue'
	import Tabs from '../../components/common/tabs/Tabs.vue'
	import AD from "../../components/common/ad/AD.vue"
	import Footer from '../../components/common/footer/Footer.vue'
	export default {
		name: 'Home',
		components: {
			Tabs,
			Footer,
			AD
		},
		data() {
			return {
				hometabs: [{
					name: "首页",
					path: "first"
				}, {
					name: "歌手",
					path: "singer"
				}]


			}
		},
		methods: {
			handleChange(value) {
				console.log(value);
			}
		}
	}
</script>

<style scoped>
	.home-tabs {
		margin-top: 10px;
	}
</style>
