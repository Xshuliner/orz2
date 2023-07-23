const rollupOptionsPx2vp = {
	unitToConvert: 'px', // 需要转换的单位，默认为"px"
	viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度
	viewportHeight: 1334, // 视窗的高度，根据375设备的宽度来指定，一般指定667，也可以不配置
	unitPrecision: 13, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
	propList: ['*'], // 能转化为vw的属性列表
	viewportUnit: 'vmin', // 指定需要转换成的视窗单位，建议使用vw
	fontViewportUnit: 'vmin', // 字体使用的视口单位
	selectorBlackList: ['.ignore-', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
	minPixelValue: 2, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
	mediaQuery: false, // 允许在媒体查询中转换`px`
	replace: true, // 是否直接更换属性值，而不添加备用属性
	exclude: /(node_module)/, // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
	landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
	landscapeUnit: 'vmin', // 横屏时使用的单位
	landscapeWidth: 1134 // 横屏时使用的视口宽度
};

export default rollupOptionsPx2vp;