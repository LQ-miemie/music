<template>
	<div class="first">
		<panel :page="page1"  :card="card"></panel>
		<panel2 :page2="page2" :card2="card2"></panel2>
		<Panel3 :card3="card3"></Panel3>
		<panel :page="page3"  :card="card4" isheight="450px">
			<div slot="title">新碟首发</div>
			<div slot="right">更多></div>
		</panel>
		<panel5 :card5="card5"></panel5>
		<panel6 :page="page6" :card="card6"></panel6>
		<!-- <el-container>
			
		  <el-header>Header</el-header>
		  <el-main>Main</el-main>
		</el-container> -->
		
	</div>
	
</template>

<script>
	import Panel from "../../../components/common/panel/Panel.vue"
	import Panel2 from "../childfirst/Panel2.vue"
	import Panel3 from "../childfirst/Panel3.vue"
	import Panel5 from "../childfirst/Panel5.vue"
	import Panel6 from "../childfirst/Panel6.vue"
	export default {
		name: "HomeFirst",
		components: {
			Panel,
			Panel2,
			Panel3,
			Panel5,
			Panel6,
		},
		created() {},

		data() {
			return {
				page1: ["为你推荐", "网络歌曲", "经典粤语", "官方歌单", "情歌"],
				page2: ["最新", "内地", "港台", "欧美", "韩国", "日本"],
				page3: ["内地", "港台", "欧美", "韩国", "日本", "其他"],
				page6: ["精选","内地", "港台", "欧美", "韩国", "日本"],
				card: [
					[{
							img: require('@/assets/img/11.jpg'),
							title: "卡片1",
							num: 10011
						},
						{
							img: require('@/assets/img/12.jpg'),
							title: "卡片2",
							num: 11111
						},
						{
							img: require('@/assets/img/13.jpg'),
							title: "卡片3",
							num: 22211
						},
						{
							img: require('@/assets/img/14.jpg'),
							title: "卡片4",
							num: 3331
						},
						{
							img: require('@/assets/img/15.jpg'),
							title: "卡片5",
							num: 444
						}
					],
					[{
							img: require('@/assets/img/6.jpg'),
							title: "卡片6",
							num: 152
						},
						{
							img: require('@/assets/img/4.jpg'),
							title: "卡片7",
							num: 12121
						},
						{
							img: require('@/assets/img/2.jpg'),
							title: "卡片8",
							num: 12311
						},
						{
							img: require('@/assets/img/3.jpg'),
							title: "卡片9",
							num: 1211
						}
					]
				],
				card2: [
					[{
							img: "https://y.gtimg.cn/music/photo_new/T002R90x90M000002lGL1O1P9Hp2_1.jpg?max_age=2592000",
							title: "卡片1",
							introduce: "介绍1",
							num: 122
						},
						{
							img: require('@/assets/img/2.jpg'),
							title: "卡片2",
							introduce: "介绍2",
							num: 212
						},
						{
							img: require('@/assets/img/3.jpg'),
							title: "卡片3",
							introduce: "介绍4",
							num: 132
						},
						{
							img: require('@/assets/img/4.jpg'),
							title: "卡片4",
							introduce: "介绍4",
							num: 144
						},
						{
							img: require('@/assets/img/5.jpg'),
							title: "卡片5",
							introduce: "介绍5",
							num: 155
						},
						{
							img: require('@/assets/img/6.jpg'),
							title: "卡片6",
							introduce: "介绍6",
							num: 166
						},
						{
							img: require('@/assets/img/7.jpg'),
							title: "卡片7",
							introduce: "介绍7",
							num: 177
						},
						{
							img: require('@/assets/img/8.jpg'),
							title: "卡片8",
							introduce: "介绍8",
							num: 188
						},
						{
							img: require('@/assets/img/9.jpg'),
							title: "卡片9",
							introduce: "介绍9",
							num: 125
						}
					],
					[{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							introduce: "介绍1",
							num: 1212
						},
						{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							introduce: "介绍1",
							num: 1212
						},
						{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							introduce: "介绍1",
							num: 1212
						},
						{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							introduce: "介绍1",
							num: 1212
						},
						{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							introduce: "介绍1",
							num: 1212
						},
						{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							introduce: "介绍1",
							num: 1212
						},
						{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							introduce: "介绍1",
							num: 1212
						},
						{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							introduce: "介绍1",
							num: 1212
						},
						{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							introduce: "介绍1",
							num: 1212
						}
					]
				],
				card3: [
					[{
						img: require('@/assets/img/recommend/1.jpg'),
						title: "首发"
					}, {
						img: require('@/assets/img/recommend/2.jpg'),
						title: "独家"
					}],
					[{
						img: require('@/assets/img/recommend/3.jpg'),
						title: "预约"
					}, {
						img: require('@/assets/img/recommend/4.jpg'),
						title: "电台"
					}],
					[{
						img: require('@/assets/img/recommend/5.jpg'),
						title: "独家"
					}, {
						img: require('@/assets/img/recommend/6.jpg'),
						title: "独家"
					}]
				],
				card4: [
					[{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							num: "卡片1"
						}, {
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							num: 100
						}, 
						{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							num: 100
						},
						{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							num: 100
						},
						{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							num: 100
						},
						{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							num: 100
						},{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							num: 10011
						},
						{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							num: 10011
						},
						{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							num: 10011
						},
						{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							num: 10011
						},
						{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							num: 10011
						},
						{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							num: 10011
						}
					]
				],
				card5:[[{song:'歌曲一',singer:"知名歌手A"},{song:'歌曲二',singer:"知名歌手B"},{song:'歌曲三',singer:"知名歌手C"}],
				[{song:'歌曲一',singer:"知名歌手A"},{song:'歌曲二',singer:"知名歌手B"},{song:'歌曲三',singer:"知名歌手C"}],
				[{song:'歌曲一',singer:"知名歌手A"},{song:'歌曲二',singer:"知名歌手B"},{song:'歌曲三',singer:"知名歌手C"}],
				[{song:'歌曲一',singer:"知名歌手A"},{song:'歌曲二',singer:"知名歌手B"},{song:'歌曲三',singer:"知名歌手C"}],
				[{song:'歌曲一',singer:"知名歌手A"},{song:'歌曲二',singer:"知名歌手B"},{song:'歌曲三',singer:"知名歌手C"}]],
				card6: [
					[{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							num: "卡片1"
						}, {
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							num: 100
						}, 
						{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							num: 100
						},
						{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							num: 100
						},
						{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							num: 100
						},
						{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							num: 100
						},{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							num: 10011
						},
						{
							img: require('@/assets/img/1.jpg'),
							title: "卡片1",
							num: 10011
						}
						
					]
				],
			}
		}

	}
</script>

<style >
	.first {
		width: 100%;

	}
</style>
