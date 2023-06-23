<template>
	<div class="OrzMapWrap">
		<div class="OrzMapMsg" @click="handleMsgClick">{{ props.msg }} - Map</div>
		<div class="OrzMapCount">{{ count }}</div>
	</div>
</template>

<script>
export default {
	name: 'OrzMap'
};
</script>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
	msg: String
});

// 响应式状态
const count = ref(0);

// 挂载完毕生命周期
onMounted(() => {
	console.log('OrzMap mounted.');
});

// 绑定点击事件
function handleMsgClick() {
	count.value++;
}
</script>

<style scoped>
.OrzMapWrap {
}

.OrzMapMsg {
}

.OrzMapCount {
}
</style>
