<template>
	<div class="panel3">
		<Panel>
			<template v-slot:content>
				<div>
					<el-carousel indicator-position="outside" :autoplay="false" height="250px">
						<el-carousel-item v-for="(item,index) in card3" :key="index" >
							<div class="swiper-box">
								<div v-for="item3 in item" class="img-box" >
									<img :src="item3.img" alt="">
								</div>
							</div>
							

						</el-carousel-item>
					</el-carousel>
				</div>
			</template>
		</Panel>
	</div>
</template>

<script>
	import Panel from '../../../components/common/panel/Panel.vue'
	export default {
		name: 'Panel3',
		components: {
			Panel
		},
		props:{
			card3:{
				type:Array
			}
		}
	}
</script>

<style scoped>
	.swiper-box{
		width: 70%;
		margin: 0 auto;
		display: flex;
		justify-content: center;
	}
	.img-box{
		padding:0 10px;
		height: 250px;
		
	}
	.img-box img{
		width: 100%;
		height: 100%;
	}
</style>
