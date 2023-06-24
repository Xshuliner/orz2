import ElementUI from 'element-ui';
import Vue from 'vue';
import WujieVue from 'wujie-vue2';
import router from './router';
import App from './App.vue';
import configSubs from './config/subs';

import 'element-ui/lib/theme-chalk/index.css';

const {
	setupApp
	// preloadApp,
	// bus
} = WujieVue;

Vue.use(ElementUI).use(WujieVue);

Vue.config.productionTip = false;

// bus.$on('click', (msg) => window.alert(msg));

// // 在 xxx-sub 路由下子应用将激活路由同步给主应用，主应用跳转对应路由高亮菜单栏
// bus.$on('sub-route-change', (name, path) => {
// 	const mainName = `${name}-sub`;
// 	const mainPath = `/${name}-sub${path}`;
// 	const currentName = router.currentRoute.name;
// 	const currentPath = router.currentRoute.path;
// 	if (mainName === currentName && mainPath !== currentPath) {
// 		router.push({ path: mainPath });
// 	}
// });

/**
 * 配置应用，主要是设置默认配置
 * preloadApp、startApp的配置会基于这个配置做覆盖
 */
for (let key in configSubs) {
	setupApp(configSubs[key]);
}

new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app');
