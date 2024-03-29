import env from './env';
import router from '../router';
import store from '../store';

const isProd = env === 'prod';

const lifecycles = {
	beforeLoad: (appWindow) => console.log(`${appWindow.__WUJIE.id} beforeLoad 生命周期`),
	beforeMount: (appWindow) => console.log(`${appWindow.__WUJIE.id} beforeMount 生命周期`),
	afterMount: (appWindow) => console.log(`${appWindow.__WUJIE.id} afterMount 生命周期`),
	beforeUnmount: (appWindow) => console.log(`${appWindow.__WUJIE.id} beforeUnmount 生命周期`),
	afterUnmount: (appWindow) => console.log(`${appWindow.__WUJIE.id} afterUnmount 生命周期`),
	activated: (appWindow) => {
		console.log(`${appWindow.__WUJIE.id} activated 生命周期`);
		store.dispatch('updateSubPageLoading', false);
	},
	deactivated: (appWindow) => {
		console.log(`${appWindow.__WUJIE.id} deactivated 生命周期`);
		store.dispatch('updateSubPageLoading', true);
	},
	loadError: (url, e) => console.log(`${url} 加载失败`, e)
};

const props = {
	jump: (name) => {
		router.push({ name });
	}
};

const degrade = window.localStorage.getItem('degrade') === 'true' || !window.Proxy || !window.CustomElementRegistry;

const configSubs = {
	utils: {
		name: 'utils',
		url: isProd ? '//www.orz2.top/orz2-ui/sub-utils/' : '//127.0.0.1:8080/sub-utils/', // 依赖liver-server
		attrs: {},
		exec: true,
		alive: true,
		props,
		// fetch: credentialsFetch,
		degrade,
		...lifecycles
	},
	'react-h5': {
		name: 'react-h5',
		url: isProd ? '//react.dev/' : '//react.dev/',
		attrs: {},
		exec: true,
		alive: true,
		props,
		// fetch: credentialsFetch,
		degrade,
		...lifecycles
	},
	'vue2-h5': {
		name: 'vue2-h5',
		url: isProd ? '//www.orz2.top/orz2-ui/sub-vue2-h5/' : '//localhost:9501/',
		attrs: {},
		exec: true,
		alive: true,
		props,
		// fetch: credentialsFetch,
		degrade,
		...lifecycles
	},
	'vue3-h5': {
		name: 'vue3-h5',
		url: isProd ? '//www.orz2.top/orz2-ui/sub-vue3-h5/' : '//localhost:9502/',
		attrs: {},
		exec: true,
		alive: true,
		props,
		// fetch: credentialsFetch,
		degrade,
		...lifecycles
	}
};

export default configSubs;
