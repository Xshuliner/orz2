<template>
	<!--保活模式，name相同则复用一个子应用实例，改变url无效，必须采用通信的方式告知路由变化 -->
	<WujieVue width="100%" height="100%" name="react-h5" :url="url" :sync="true"></WujieVue>
</template>

<script>
import configSubs from '../config/subs';

export default {
	data() {
		return {
			url: configSubs['react-h5'].url
		};
	}
};
</script>

<style lang="scss" scoped></style>
