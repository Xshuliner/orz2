<template>
	<div class="OrzButtonWrap">
		<div class="OrzButtonMsg" @click="handleMsgClick">{{ msg }}</div>
		<div class="OrzButtonCount" style="display: flex; width: 100px; height: 100px; --fontSize40: 40px">{{ count }}</div>
		<div class="OrzButtonTest">test1</div>
		<img class="OrzButtonLogo" src="./assets/logo.png" />
	</div>
</template>

<script>
// import logo from "./assets/logo.png"

export default {
	name: 'OrzButton',
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
		console.log('OrzButton mounted.');
	},
	methods: {
		// 绑定点击事件
		handleMsgClick() {
			this.count++;
		}
	}
};
</script>

<style scoped lang="less">
.OrzButtonWrap {
	width: 200px;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(to right, #ff0000, #00ff00, #0000ff);

	.OrzButtonMsg {
		color: blueviolet;
	}

	.OrzButtonCount {
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		color: purple;
		background-color: yellowgreen;
		border-radius: 20px;
		font-size: var(--fontSize40);
	}

	.OrzButtonLogo {
		display: grid;
		width: 20px;
		height: 20px;
		transform: translate(-50%, -50%);
	}
}
</style>
