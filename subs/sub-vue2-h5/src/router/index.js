import Vue from 'vue';
import VueRouter from 'vue-router';

const basename = '';

Vue.use(VueRouter);

const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
	return VueRouterPush.call(this, to).catch((err) => err);
};

const routes = [
	{
		path: '/',
		name: 'home'
	}
];

const router = new VueRouter({
	mode: 'hash',
	base: basename,
	routes
});

export default router;
