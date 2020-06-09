module.exports = {
	plugins:{
		autoprefixer:{},
		"postcss-px-to-viewport":{
			viewportWidth:1920, //视窗宽度，对应的设计稿宽度					
			viewportHeight:1080,//视窗高度
			unitPrecision:5,//指定px转换为视窗单位保留的小数位数
			viewportUnit:'vw',//指定需要转换的单位
			selectorBlackList:[],//指定不需要转换的类
			minPixelValue:1,//小于或等于1px不转换
			mediaQuery:false//是否允许在媒体查询中转换px
		},
	}
}