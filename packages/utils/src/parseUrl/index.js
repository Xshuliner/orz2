import splitCustom from '../splitCustom';

/**
 * @description 解析url
 * http://localhost:8080/something?a=1&b=2#/orderDetail?x=3&y=4&z=5
 * |protocol|hostname|port|  page | search |   router  |   query  |
 * |protocol|    host     |  page | search |   router  |   query  |
 * |       origin         |  page | search |   router  |   query  |
 * |            fullPage          | search |   router  |   query  |
 * |                primary                |         hash         |
 * @param {string} options.url 指定url
 * @param {boolean} options.isVerify 是否开启参数校验 默认开启 遇到传参undefined、null的值自动改为空字符串''
 * @param {boolean} options.isDecode 是否开启参数解码 默认开启 对传参进行解码
 */

// 解析参数
const parseParams = (strParams, options) => {
	const { isVerify = true, isDecode = true } = options || {};
	const objRight = {};
	const arrRight = strParams.split('&');
	const nRightLength = arrRight.length;
	for (let index = 0; index < nRightLength; index++) {
		const strRightItem = arrRight[index];
		let [key = '', value = ''] = splitCustom({
			str: strRightItem,
			separator: '=',
			limit: 2
		});
		if (isVerify && ['undefined', 'null'].includes(value)) {
			value = '';
		}
		if (isDecode) {
			value = decodeURIComponent(value);
		}
		if (key) {
			objRight[key] = value;
		}
	}
	return objRight;
};

// 解析主路径核心
const parseCorePrimary = (url, options) => {
	const [primary_fullPage = '', primary_search = ''] = splitCustom({
		str: url,
		separator: '?',
		limit: 2
	});
	// const [primary_origin, primary_page] = splitCustom({
	// 	str: primary_fullPage,
	// 	separator: /(?<!\/)\/(?!\/)/g,
	// 	limit: 2
	// });
	// TODO: 调整splitCustom方法，使其兼容精准匹配
	let primary_origin = primary_fullPage;
	let primary_page = '';
	let nIndexFullPage = -1;
	for (let index = 1; index < primary_fullPage.length; index++) {
		if (primary_fullPage[index - 1] !== '/' && primary_fullPage[index] === '/' && primary_fullPage[index + 1] !== '/') {
			nIndexFullPage = index;
			break;
		}
	}
	if (nIndexFullPage >= 0) {
		primary_origin = primary_fullPage.substring(0, nIndexFullPage);
		primary_page = primary_fullPage.slice(nIndexFullPage + 1);
	}

	const [primary_protocol, primary_host] = splitCustom({
		str: primary_origin,
		separator: '://',
		limit: 2
	});
	const [primary_hostname, primary_port] = splitCustom({
		str: primary_host,
		separator: ':',
		limit: 2
	});
	const primary_objSearch = parseParams(primary_search, options);

	return {
		primary_fullPage,
		primary_search,
		primary_origin,
		primary_page: primary_page ? `/${primary_page}` : primary_page,
		primary_protocol,
		primary_host,
		primary_hostname,
		primary_port,
		primary_objSearch
	};
};

// 解析哈希路径核心
const parseCoreHash = (url, options) => {
	const [hash_router = '', hash_query = ''] = splitCustom({
		str: url,
		separator: '?',
		limit: 2
	});
	const hash_objQuery = parseParams(hash_query, options);

	return {
		hash_router,
		hash_query,
		hash_objQuery
	};
};

// 解析url
const parseUrl = (options) => {
	const { url } = options || {};
	const [primary = '', hash = ''] = splitCustom({
		str: url,
		separator: '#',
		limit: 2
	});
	const {
		primary_fullPage,
		primary_search,
		primary_origin,
		primary_page,
		primary_protocol,
		primary_host,
		primary_hostname,
		primary_port,
		primary_objSearch
	} = parseCorePrimary(primary, options);
	const {
		hash_router, //
		hash_query,
		hash_objQuery
	} = parseCoreHash(hash, options);

	const path = hash_router || primary_fullPage;
	const params = {
		...hash_objQuery,
		...primary_objSearch
	};

	return {
		path,
		params,
		primary_fullPage,
		primary_search,
		primary_origin,
		primary_page,
		primary_protocol,
		primary_host,
		primary_hostname,
		primary_port,
		primary_objSearch,
		hash_router,
		hash_query,
		hash_objQuery
	};
};

export default parseUrl;
