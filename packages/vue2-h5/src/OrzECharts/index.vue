<template>
	<div class="OrzEChartsWrap">
		<div class="OrzEChartsMsg" @click="handleMsgClick">{{ msg }}</div>
		<div class="OrzEChartsCount">{{ count }}</div>
	</div>
</template>

<script>
export default {
	name: 'OrzECharts',
	props: {
		msg: {
			type: String,
			default: 'this is default msg'
		}
	},
	data() {
		return {
			count: 0
		};
	},
	// 挂载完毕生命周期
	mounted() {
		console.log('OrzECharts mounted.');
	},
	methods: {
		// 绑定点击事件
		handleMsgClick() {
			this.count++;
		}
	}
};
</script>

<style scoped>
.OrzEChartsWrap {
	width: 23px;
	height: 24px;
	background-color: brown;
}

.OrzEChartsMsg {
}

.OrzEChartsCount {
}
</style>
