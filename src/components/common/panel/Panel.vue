<template>
	<div class="panel">
		<el-container>
			<!-- 头部布局容器 -->
			<el-header>
				<h1>
					<slot name="title">今日推荐</slot>
				</h1>
			</el-header>
			<!-- 中间布局容器 -->
			<el-main>

				<!-- 导航 -->
				<el-row>
					<el-col :span="4">
						<div class="grid-content bg-purple">
							<slot name="left"><span class="left-box">left</span></slot>
						</div>
					</el-col>
					<el-col :span="16">
						<div class="grid-content bg-purple-light">
							<slot name="center">
								<ul>
									<li v-for="(item,index) in page" @click="liClick(index)" :class="{liactive:cunt===index}" :key='index'>{{item}}</li>
								</ul>
							</slot>
						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content bg-purple">
							<slot name="right"></slot>
						</div>
					</el-col>
				</el-row>
				<slot name="content">
					<!-- 走马灯 -->
					<el-carousel indicator-position="outside" :autoplay="false" :height="isheight">
						<el-carousel-item v-for="(item,index) in this.card" :key="index">
							<slot name="swiper">
								<el-row class="box">
									<el-col :span="4" v-for="(o, index1) in item" :key="index1">
										<el-card :body-style="{ padding: '0px' }" class="card">
											<div class="imgbox"> <img :src="o.img" class="image"></div>

											<div style="padding: 5px;">
												<span>{{o.title}}</span>
												<div class="bottom clearfix">
													<time class="num">{{o.num|showNum(o.num)}}</time>

												</div>
											</div>
										</el-card>
									</el-col>
								</el-row>
							</slot>

						</el-carousel-item>
					</el-carousel>
				</slot>

			</el-main>

		</el-container>
	</div>
</template>

<script>
	export default {
		name: 'Panel',
		props: {
			page: {
				type: Array

			},
			info: {
				type: Object,
				default () {
					return {}
				}
			},
			isheight: {
				type: String
			},
			card: {
				type: Array
			}
		},
		computed: {

		},
		mounted() {

		},
		data() {
			return {
				cunt: 0

			}
		},
		computed: {
			num() {

			}
		},
		methods: {
			liClick(index) {
				this.cunt = index
			}
		},
		filters: {
			showNum(num) {
				if (num.constructor == Number) {
					return num > 9999 ? "播放量" + (num / 10000).toFixed(2) + "万" : "播放量" + num
				} else {
					return num
				}
			}
		}
	}
</script>

<style >
	.panel {
		background-image: linear-gradient(whitesmoke, white);

	}

	.panel li {
		padding: 0 15px;
		font-size: 14px;
	}

	.panel li:hover {
		color: #33CC33;
		cursor: pointer
	}

	.liactive {
		color: #33CC33;
	}

	.left-box {
		color: rgba(0, 0, 0, 0);

	}

	.box {

		display: flex;
		justify-content: center;
		margin-top: 20px;
		flex-wrap: wrap;

	}

	.card {
		height: auto;		
		margin: 0 15px;
		flex: 1;
		margin-bottom: 15px;
	}

	.imgbox {
		height: 200px;
		overflow: hidden;
	}

	.card img {
		height: 200px;

	}

	.card img:hover {
		transform: scale(1.15);
		transition: 0.5s;

	}

	.num {
		font-size: 13px;
		color: #999;
	}

	.bottom {
		margin-top: 5px;
		line-height: 12px;
	}

	.button {
		padding: 0;
		float: right;
	}

	.image {
		width: 100%;
		display: block;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}
</style>
