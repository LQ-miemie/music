<template>
	<div class="footer">

		<el-row class="footer-box">
			<el-col :span="8">
				<div class="grid-content bg-purple">
					<P>下载QQ音乐</P>
					<div class="logo-content">
						<span @mouseover="is1=true" @mouseout="is1=false">
							<span v-if="!is1"><img src="../../../assets/img/logo/PC.png" alt=""></span>
							<span v-else><img src="../../../assets/img/logo/PC01.png" alt=""></span>
							<p>PC版</p>
						</span>
						<span @mouseover="is2=true" @mouseout="is2=false">
							<span v-if="!is2"><img src="../../../assets/img/logo/mac.png" alt=""></span>
							<span v-else><img src="../../../assets/img/logo/mac01.png" alt=""></span>
							<p>Mac版</p>
						</span>
						<span @mouseover="is3=true" @mouseout="is3=false">
							<span v-if="!is3"><img src="../../../assets/img/logo/ios.png" alt=""></span>
							<span v-else><img src="../../../assets/img/logo/ios01.png" alt=""></span>
							<p>IOS</p>
						</span>
						<span @mouseover="is4=true" @mouseout="is4=false">
							<span v-if="!is4"><img src="../../../assets/img/logo/android.png" alt=""></span>
							<span v-else><img src="../../../assets/img/logo/android01.png" alt=""></span>
							<p>Android版</p>
						</span>
					</div>
					<p>开放平台</p>
					<div>
						<span style="padding-right: 15px;"><a href="">QQ音乐开放平台</a></span>
						<span><a href="">腾讯音乐人</a></span>
					</div>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple-light">
					<p>产品特色</p>
					<div class="logo-content">
						<span @mouseover="is5=true" @mouseout="is5=false">
							<span v-if="!is5"><img src="../../../assets/img/logo/allK01.png" alt=""></span>
							<span v-else><img src="../../../assets/img/logo/allK.png" alt=""></span>
							<p>全民K歌</p>
						</span>
						<span @mouseover="is6=true" @mouseout="is6=false">
							<span v-if="!is6"><img src="../../../assets/img/logo/allK01.png" alt=""></span>
							<span v-else><img src="../../../assets/img/logo/allK.png" alt=""></span>
							<p>super sound</p>
						</span>
						<span @mouseover="is7=true" @mouseout="is7=false">
							<span v-if="!is7"><img src="../../../assets/img/logo/allK01.png" alt=""></span>
							<span v-else><img src="../../../assets/img/logo/allK.png" alt=""></span>
							<p>Qplay</p>
						</span>
					</div>
					<div>
						<span><a href="">车载互联</a></span>
						<span><a href="">QQ演出</a></span>
					</div>
					<p>TME集团官网</p>
					<span><a href="">腾讯音乐</a></span>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple">
					<p>合作连接</p>
					<div class="a-box">
						<a href="">CJ ENM</a>
						<a href="">CJ ENM</a>
						<a href="">CJ ENM</a>
						<a href="">CJ ENM</a>
						<a href="">CJ ENM</a>
						<a href="">CJ ENM</a>
						<a href="">CJ ENM</a>
						<a href="">CJ ENM</a>
						<a href="">CJ ENM</a>

					</div>
				</div>
			</el-col>
		</el-row>

		<el-row class="content2">
			<el-col :span="24">
				<div class="grid-content bg-purple-dark">
					<div>
						<ul>
							<li class="a1">aa</li>
							<li class="a1">aa</li>
							<li class="a1">aa</li>
							<li class="a1">aa</li>
							<li class="a1">aa</li>
							<li class="a1">aa</li>

						</ul>
					</div>
					<span>Copyright © 1998 - 2020 Tencent.</span>
					<span><a href="">All Rights Reserved.</a></span>
					<div>
						<span>腾讯公司</span>
						<span><a href="">版权所有</a></span>
						<span><a href="">腾讯网络文化经营许可证</a></span>
					</div>
				</div>
			</el-col>
		</el-row>

	</div>
</template>

<script>
	export default {
		name: "Footer",
		data(){
			return{
				is1:null,
				is2:null,
				is3:null,
				is4:null,
				is5:null,
				is6:null,
				is7:null
			}
		},
		methods:{
			
		},
		computed:{
			
		}

	}
</script>

<style scoped>
	P {
		padding: 20px 0;



	}

	.footer {
		background-color: rgba(0, 0, 0, 0.8);
		height: 700px;
		color: #707070;

	}
	.grid-content{
		padding: 0 50px;
	}

	.footer span {
		font-size: 14px;
	}

	.footer-box {
		width: 80%;
		margin: 0 auto;
		padding-bottom: 50px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.3)
	}

	.logo-content {
		display: flex;
		justify-content: space-around;
	}
	.logo-content span:hover{
		color: #33CC33;
	}

	.logo-content img {
		width: 40px;
		height: 40px;
	}

	.a-box {
		display: flex;
		flex: 3;
		flex-wrap: wrap;
	}

	 a {
		width: 33%;
		padding-bottom: 20px;
		color: #707070;
		font-size: 14px;
	}

	 a:hover {
		color: #33CC33;
	}

	.content2 {

		margin-top: 50px;
	}

	.content2 ul li {
		padding: 0 20px;
		border-right: 1px solid #707070;

	}

	.content2 ul li:nth-last-child(1) {
		border-right: none
	}
</style>
