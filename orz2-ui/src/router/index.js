import Vue from 'vue';
import VueRouter from 'vue-router';

const basename = '';

Vue.use(VueRouter);

const routes = [
	{
		path: '/'
	}
];

const router = new VueRouter({
	mode: 'hash',
	base: basename,
	routes
});

export default router;
