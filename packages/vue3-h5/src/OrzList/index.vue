<template>
	<div class="OrzListWrap">
		<div class="OrzListMsg" @click="handleMsgClick">{{ props.msg }} - List</div>
		<div class="OrzListCount" style="font-size: 40px; color: red">{{ count }}</div>
	</div>
</template>

<script>
export default {
	name: 'OrzList'
};
</script>

<script setup>
import { ref, onMounted } from 'vue';
import { sayHello } from '../../utils';

const props = defineProps({
	msg: String
});

// 响应式状态
const count = ref(0);

// 挂载完毕生命周期
onMounted(() => {
	console.log('OrzList mounted.');
	sayHello('222');
});

// 绑定点击事件
function handleMsgClick() {
	count.value++;
}
</script>

<style scoped lang="less">
.OrzListWrap {
	width: 400px;
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(to right, #ff0000, #00ff00, #0000ff);
}

.OrzListMsg {
}

.OrzListCount {
}
</style>
