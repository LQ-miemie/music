<template>
	<div>
		<!-- <div>
			<div v-for="item in card2">{{item}}</div>
		</div> -->
		<panel :page="page2" isheight="1000px" >
			<div slot="title">新歌首发</div>
			<div slot="left"><span class="left-btn">播放全部</span></div>
				<template v-slot:content>
				<div>
					<el-carousel indicator-position="outside" :autoplay="false" height="380px">
						<el-carousel-item v-for="(item,index) in card2" :key="index">							
							<div class="content2">
								<div class="card2" v-for="(item1,index) in item">
									<div class="img-box"><img :src="item1.img" alt=""></div>									
									<div>
										<span>{{item1.title}}</span>
										<span class="introduce">{{item1.introduce}}</span>
							
									</div>
									<span class="time">{{item1.num|date(item1.num)}}</span>
								</div>
							</div>
							
						</el-carousel-item>
					</el-carousel>
				</div>
			</template>

			<div slot="swiper">
				


			</div>
		</panel>
	</div>
</template>

<script>
	import Panel from '../../../components/common/panel/Panel.vue'
	export default {
		name: "Panel2",
		components: {
			Panel
		},
		props: {
			page2: {
				type: Array
			},
			card2: {
				type: Array
			}
		},
		filters:{
			date(num){
				let second = num%60 ;
				if(num%60<10){second="0"+num%60} ;
				return Math.floor(num/60)+":"+ second
			}
		}
	}
</script>

<style scoped>
	.left-btn {
		border: 1px solid;
		padding: 10px 20px;
		font-size: 10px;
	}

	.left-btn:hover {
		background-color: #e9e9e9;
	}

	/* 卡片 */
	.content2 {
		margin-top: 30px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center
	}
	.content2{
		font-size: 13px;
	}

	.card2 {

		width: 26%;
		height: 90px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		margin: 15px 15px;

	}
	
	.img-box {
		width: 80px;
		height: 80%;

	}
	.img-box img{
		width: 100%;
		height: 100%;
	}
	.card2 span {
		display: block;
		padding: 5px;
	}
	.introduce ,.time{
		color: rgba(0,0,0,0.4);
	}
</style>
