<template>
	<div>
		<img alt="Vue logo" src="./assets/logo.png" />
		<div>Welcome to Your Vue333333333333.js App</div>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {}
};
</script>

<style>
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
	width: 100%;
	height: 100%;
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
