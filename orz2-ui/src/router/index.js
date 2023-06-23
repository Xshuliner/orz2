import Vue from 'vue';
import VueRouter from 'vue-router';
import ReactH5 from '../views/ReactH5.vue';
import Vue2H5 from '../views/Vue2H5.vue';
import Vue3H5 from '../views/Vue3H5.vue';

const basename = '';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/vue2-h5'
	},
	{
		path: '/vue2-h5',
		name: 'vue2-h5',
		component: Vue2H5
	},
	{
		path: '/vue3-h5',
		name: 'vue3-h5',
		component: Vue3H5
	},
	{
		path: '/react-h5',
		name: 'react-h5',
		component: ReactH5
	}
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置

const router = new VueRouter({
	mode: 'hash',
	base: basename,
	routes
});

export default router;
