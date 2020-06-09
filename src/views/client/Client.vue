<template>
	<div class="client">
		<el-carousel height="200px" direction="vertical" :autoplay="false" :height="a" :loop="false" ref="carousel">
			<!-- <el-carousel-item v-for="(item,index) in 5" :key="item" name="index">
				<h3 class="medium">{{ item }}</h3>
				
			</el-carousel-item> -->
			<!-- 第一张图 -->
			<el-carousel-item>
				<div style="margin-top: 250px;">
					<p style="font-size: 70px;">QQ音乐 PC客户端</p>
					<p style="font-size: 50px;">海量高品质曲库尽享</p>				
					<span style="font-size: 40px;background-color: #33CC33;padding: 15px 40px;border-radius: 100px;" >立即下载</span>
				</div>
				
				<div>
					<img src="../../assets/img/client/down.png" alt="" class="down">
				</div>
				


			</el-carousel-item>
			<!-- 第二张图 -->
			<el-carousel-item>
				<div class="text3">
					<p style="font-size: 50px;">社交互动</p>
					<p style="font-size: 50px;">分享你的音乐感动</p>
					<p style="font-size: 30px;opacity: 0.5;">歌词海报记录生活，单曲弹幕邂逅共鸣，</p>
					<p style="font-size: 30px;opacity: 0.5;">更多惊喜等你来玩！</p>
				</div>
				
				<div>
					<img src="../../assets/img/client/down.png" alt="" class="down">
				</div>

			</el-carousel-item>
			<!-- 第三张图 -->
			<el-carousel-item>
				<div class="text3" style="width: 620px ;left: 50%;">
					<p style="font-size: 50px;">智能推荐</p>
					<p style="font-size: 50px;">随刻遇见喜欢的音乐</p>
					<p style="font-size: 30px;opacity: 0.5;">懂你的猜你喜欢，最新最热独家首发、排行榜</p>
					<p style="font-size: 30px;opacity: 0.5;">电台，全方位的音乐推荐都在这！</p>
				</div>
				
				<div>
					<img src="../../assets/img/client/down.png" alt="" class="down">
				</div>

			</el-carousel-item>
			<!-- 第四张图 -->
			<el-carousel-item>
				
				<div class="text3" style="width: 620px ;color: #000000;">
					<p style="font-size: 50px;">多终端云同步</p>
					<p style="font-size: 50px;">切换设备音乐任在</p>
					<p style="font-size: 30px;opacity: 0.5;">只需一个账号，即可实现多终端音乐同步</p>
					<p style="font-size: 30px;opacity: 0.5;">个人音乐随时随地畅享</p>
				</div>
			
			</el-carousel-item>
		</el-carousel>
		
		<!-- 返回 -->
		<button class="back" @click="goback"> < </button>

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
			goback(){
				this.$router.back()
			}
			

		}
	}
</script>


<style >
	.client li{
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
	
	.back{
		position: absolute; 
		top: 0;
		left: 0;
		z-index: 1000;
	}
	
	/* 向下图标 */
	.down{
		width: 50px;
		position: absolute;
		bottom: 20px;
		opacity: 0.8;
		animation:myfirst 1.5s;
		animation-iteration-count:infinite;
		animation-timing-function:linear;
	}
	@keyframes myfirst
	{
	0%   {opacity: 0.8; bottom: 20px; }
	25%  {opacity: 0.5; bottom: 15px; }
	50%  {opacity: 0.3; bottom: 10px; }
	75%  {opacity: 0.1; bottom: 5px; }
	100% {opacity: 0; bottom: 20px; }
	}
	
	/* 文字 */
	.text3{		
		width: 600px;
		height: 500px;
		position: absolute;
		top: 50%;
		left: 20%;
		transform: translate(0,-50%);
	}
	.text3 p {
		float: left;
		
		
	}
</style>
