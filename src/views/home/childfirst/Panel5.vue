<template>
	<div class="panel">
		<el-container>
			<!-- 头部 -->
			<el-header>
				<el-row>
					<el-col :span="8">
						<div class="grid-content bg-purple">.</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple-light">
							<h1>排行榜</h1>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple" @click="moreBtn">更多></div>
					</el-col>
				</el-row>
			</el-header>
			<!-- 中间 -->
			<!-- <el-main> -->
			<div class="card-box">
				<div class="card" v-for="(item,index) in card5">
					<p style="font-size: 30px;">巅峰榜</p>
					<p style="font-size: 20px;">热歌</p>
					<div>---</div>
					<div v-for="item5 in item" style="padding: 20px 0;">
						<p>{{item5.song}}</p>
						<p>{{item5.singer}}</p>
					</div>
				</div>
			</div>

			<!-- 	</el-main> -->
		</el-container>

	</div>
</template>

<script>
	export default {
		name: "Panel5",
		props: {
			card5: {
				type: Array
			}
		},
		methods: {
			moreBtn() {
				console.log("111")
			}
		}
	}
</script>

<style scoped>
	.bg-purple {
		margin-top: 40px;
		cursor: pointer;
	}

	.bg-purple:hover {
		color: #33CC33;
	}

	.card-box {
		width: 80%;
		margin: 0 auto;
		display: flex;
		/* background-attachment: fixed; */
	}

	.card {

		height: 600px;
		color: white;
		background-color: hotpink;
		background: url(../../../assets/img/home/first-bj.png);
		margin: 0 40px;

	}

	.card:nth-child(1) {
		background-position: 0% 0%;
	}

	.card:nth-child(2) {
		background-position: 25% 0%;
	}

	.card:nth-child(3) {
		background-position: 50% 0%;
	}

	.card:nth-child(4) {
		background-position: 75% 0%;
	}

	.card:nth-child(5) {
		background-position: 100% 0%;
	}

	/* .card:nth-child(2)::after{
		position: absolute;
		top:0;
		left:0;
		width: 200px;
		height: 600px;
		background:url(../../../assets/img/10.jpg) ;
		filter: blur(8px);
		z-index:-1;
		
	} */
	.card:hover {
		background-size: 1200px 600px;	  
	}
</style>
