<template>
	<div class="singer">
		<singer-hander></singer-hander>
		<singer-select :nameList="nameList" :area="area" :sex="sex" :category="category"></singer-select>
	</div>
</template>

<script>
	import SingerHander from "../childsinger/SingerHander.vue"
	import SingerSelect from "../childsinger/SingerSelect.vue"
	
	export default {
		name:"Singer",
		components:{
			SingerHander,
			SingerSelect
		},
		data(){
			return{
				nameList:["热门","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
				area:["全部","内地", "港台", "欧美", "日本", "韩国", "其他"],
				sex:["全部","男", "女", "组合"],
				category:["全部","流行", "嘻哈", "摇滚", "电子", "民谣", "乡村"],
			}
		}
	}
</script>

<style scoped>
	
</style>
