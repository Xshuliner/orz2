<template>
	<WujieVue width="100%" height="100%" name="vue2-h5" :url="url" :sync="true"></WujieVue>
</template>

<script>
import configSubs from '../config/subs';

export default {
	data() {
		return {
			url: configSubs['vue2-h5'].url
		};
	},
	methods: {
		jump(name) {
			this.$router.push({ name });
		}
	}
};
</script>

<style lang="scss" scoped></style>
