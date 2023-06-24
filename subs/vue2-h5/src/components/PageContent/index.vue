<template>
	<div class="PageContentWrap">
		<OrzButton v-if="msg === 'OrzButton'" />
		<OrzECharts v-else-if="msg === 'OrzECharts'" />
		<div v-else>{{ msg }}</div>
	</div>
</template>

<script>
import { OrzButton, OrzECharts } from '@orz2/vue2-h5';

export default {
	name: 'PageContent',
	components: {
		OrzButton, //
		OrzECharts
	},
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
		console.log('PageContent mounted.');
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
.PageContentWrap {
}

.PageContentMsg {
}

.PageContentCount {
}
</style>
