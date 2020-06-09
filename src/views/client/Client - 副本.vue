<template>
	<div class="client">
		<el-carousel height="200px" direction="vertical" :autoplay="false" :height="a" :loop="false" ref="carousel">
			<!-- <el-carousel-item v-for="(item,index) in 5" :key="item" name="index">
				<h3 class="medium">{{ item }}</h3>
				
			</el-carousel-item> -->
			<!-- 第一张图 -->
			<el-carousel-item>

				<h3 class="medium">1</h3>
				<div>
					<img src="../../assets/img/client/down.png" alt="" class="down">
				</div>



			</el-carousel-item>
			<!-- 第二张图 -->
			<el-carousel-item>
				<h3 class="medium">2</h3>

				<div>
					<img src="../../assets/img/client/down.png" alt="" class="down">
				</div>

			</el-carousel-item>
			<!-- 第三张图 -->
			<el-carousel-item>
				<h3 class="medium">3</h3>

				<div>
					<img src="../../assets/img/client/down.png" alt="" class="down">
				</div>

			</el-carousel-item>
			<!-- 第四张图 -->
			<el-carousel-item>
				<h3 class="medium">4</h3>

			</el-carousel-item>
		</el-carousel>

		<!-- 返回 -->
		<button class="back" @click="goback">返回 </button>
	</div>
</template>
<script>
	export default {
		name: "Client",
		data() {
			return {
				a: "100vh"
			}
		},
		mounted() {
			window.addEventListener('mousewheel', this.scrollFunc, true); // 监听（绑定）滚轮滚动事件
		},
		methods: {
			scrollFunc(e) {
				e = e || window.event;
				if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件               
					if (e.wheelDelta > 0) { //当滑轮向上滚动时  
						// alert('上滚')
						this.$refs.carousel.prev()
					}
					if (e.wheelDelta < 0) { //当滑轮向下滚动时  
						// alert('下滚')
						this.$refs.carousel.next()

					}
				} else if (e.detail) { //Firefox滑轮事件  
					if (e.detail > 0) { //当滑轮向下滚动时  
						//alert('下滚')
						this.$refs.carousel.next()
					}
					if (e.detail < 0) { //当滑轮向上滚动时  
						//alert('上滚')
						this.$refs.carousel.prev()
					}
				}

			},
			setActiveItem(index) {
				this.$refs.carousel.setActiveItem(3)
			},
			goback() {
				this.$router.back()
			}


		}
	}
</script>
<style>
	.client li {
		display: block !important;
	}

	.client {
		height: 100vh;
		background-color: white;
		margin-top: -91px;
		position: relative;
		z-index: 2;
		color: white;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 200px;
		margin: 0;
	}


	.client ul li {
		display: block
	}
	
	/* 背景 */

	.client .el-carousel__item {
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.client .el-carousel__item:nth-child(1) {
		background-image: url(../../assets/img/client/bj1.png);

	}

	.client .el-carousel__item:nth-child(2) {
		background-image: url(../../assets/img/client/bj2.png);

	}

	.client .el-carousel__item:nth-child(3) {
		background-image: url(../../assets/img/client/bj3.png);

	}

	.client .el-carousel__item:nth-child(4) {
		background-image: url(../../assets/img/client/bj4.png);

	}

	.back {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1000;
	}
/* 向下图标 */
	.down {
		width: 50px;
		position: absolute;
		bottom: 20px;
		opacity: 0.8;
		animation: myfirst 1.5s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}

	@keyframes myfirst {
		0% {
			opacity: 0.8;
			bottom: 20px;
		}

		25% {
			opacity: 0.5;
			bottom: 15px;
		}

		50% {
			opacity: 0.3;
			bottom: 10px;
		}

		75% {
			opacity: 0.1;
			bottom: 5px;
		}

		100% {
			opacity: 0;
			bottom: 20px;
		}
	}

	
</style>
