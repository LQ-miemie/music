<template>
	<div class="select">
		<div class="select-box">
			<ul>
				<li v-for="(item,index) in nameList">{{item}}</li>
			</ul>
			<ul>
				<li v-for="(item,index) in area">{{item}}</li>
			</ul>
			<ul>
				<li v-for="(item,index) in sex">{{item}}</li>
			</ul>
			<ul>
				<li v-for="(item,index) in category">{{item}}</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
	export default {
		name:'SingerSelect',
		props:{
			nameList:{
				type:Array
			},
			area:{
				type:Array
			},
			sex:{
				type:Array
			},
			category:{
				type:Array
			}
		}
	}
	
</script>

<style >
	.select li{margin: 0 12px;}
	.select-box {
		padding-top:60px;
		width: 70%;
		margin: 0 auto;			
	}
	.select ul {
		margin-bottom: 30px;
		width: 100%;		
		/* border: 1px solid; */
		display: flex;
		justify-content: flex-start;
	}
	
</style>
