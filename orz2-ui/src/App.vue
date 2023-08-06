<template>
	<el-container id="app">
		<!-- 头部 -->
		<el-header class="flex0 flexBox flexRow flexJSB flexAC appHeader">
			<div class="flexBox flexRow flexJS flexAC">
				<img class="appLogo" src="./assets/logo.png" alt="orz2 logo" />
				<span class="appTitle">orz2-ui 组件库</span>
			</div>
			<el-select v-model="current">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
			</el-select>
		</el-header>
		<el-container class="flex1">
			<!-- 侧边栏 -->
			<!-- <el-aside width="200px">
				<el-menu class="height100">
					<el-menu-item-group title="分组1">
						<el-menu-item index="1-1">选项1</el-menu-item>
						<el-menu-item index="1-2">选项2</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="分组2">
						<el-menu-item index="1-3">选项3</el-menu-item>
					</el-menu-item-group>
				</el-menu>
			</el-aside> -->
			<!-- 内容区 -->
			<el-main v-loading="isSubPageLoading" class="width100 height100">
				<WujieVue width="100%" height="100%" :name="name" :url="url" :sync="true"></WujieVue>
			</el-main>
		</el-container>
		<!-- 测试区域 -->
		<!-- <el-container v-if="false">
			<el-header>
				<router-link to="/react-h5">react-h5</router-link>
				<router-link to="/vue2-h5">vue2-h5</router-link>
				<router-link to="/vue3-h5">vue3-h5</router-link></el-header
			>
			<el-main>
				<router-view />
			</el-main>
		</el-container> -->
	</el-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import configSubs from './config/subs';

export default {
	name: 'App',
	components: {},
	data() {
		const arrOptions = Object.values(configSubs || {}).map((item) => {
			return {
				label: item.name,
				value: item.name,
				url: item.url
			};
		});

		return {
			options: arrOptions,
			current: 'vue2-h5',
			name: '',
			url: ''
		};
	},
	computed: {
		...mapState(['isSubPageLoading'])
	},
	watch: {
		current: {
			handler(newVal) {
				console.log('watch current', newVal);
				const currentSub = configSubs[newVal] || {};
				const { name = '', url = '' } = currentSub || {};
				this.name = name;
				this.url = url;
			},
			immediate: true
		}
	},
	methods: {
		...mapActions(['updateSubPageLoading'])
	}
};
</script>

<style>
.width0 {
	width: 0;
}

.height0 {
	height: 0;
}

.width100 {
	width: 100%;
}

.height100 {
	height: 100%;
}

.flexBox {
	display: flex;
}

.flexRow {
	flex-direction: row;
}

.flexColumn {
	flex-direction: column;
}

.flexJS {
	justify-content: flex-start;
}

.flexJC {
	justify-content: center;
}

.flexJE {
	justify-content: flex-end;
}

.flexJSB {
	justify-content: space-between;
}

.flexAS {
	align-items: flex-start;
}

.flexAC {
	align-items: center;
}

.flexAE {
	align-items: flex-end;
}

.flex0 {
	flex: 0 0 auto;
}

.flex1 {
	flex: 1 1 auto;
}

.flex2 {
	flex: 2 2 auto;
}
</style>

<style scope>
*,
.el-main {
	margin: 0;
	padding: 0;
}

#app {
	box-sizing: border-box;
	position: relative;
	width: 100vw;
	height: 100vh;
}

.appHeader {
	background-color: #409eff;
}

.appLogo {
	width: 28px;
	height: 28px;
}

.appTitle {
	margin-left: 12px;
	font-size: 18px;
	font-weight: bold;
}
</style>
