import { parseUrl } from '../src';

test('用例1', () => {
	expect(
		parseUrl({
			url: 'https://www.example.com?name=JohnDoe'
		})
	).toEqual({
		path: 'https://www.example.com',
		params: { name: 'JohnDoe' },
		primary_fullPage: 'https://www.example.com',
		primary_search: 'name=JohnDoe',
		primary_origin: 'https://www.example.com',
		primary_page: '',
		primary_protocol: 'https',
		primary_host: 'www.example.com',
		primary_hostname: 'www.example.com',
		primary_port: '',
		primary_objSearch: { name: 'JohnDoe' },
		hash_router: '',
		hash_query: '',
		hash_objQuery: {}
	});
});

test('用例2', () => {
	expect(
		parseUrl({
			url: 'http://localhost:8080/list?page=1&sort=desc#about'
		})
	).toEqual({
		path: 'about',
		params: { page: '1', sort: 'desc' },
		primary_fullPage: 'http://localhost:8080/list',
		primary_search: 'page=1&sort=desc',
		primary_origin: 'http://localhost:8080',
		primary_page: '/list',
		primary_protocol: 'http',
		primary_host: 'localhost:8080',
		primary_hostname: 'localhost',
		primary_port: '8080',
		primary_objSearch: { page: '1', sort: 'desc' },
		hash_router: 'about',
		hash_query: '',
		hash_objQuery: {}
	});
});

test('用例3', () => {
	expect(
		parseUrl({
			url: 'https://www.example.com?name=John%20Doe&city=New%20York&&is=a=good=day&info=null&detail=undefined#/home/index?drink=%E5%86%B0%E5%90%B8%E7%94%9F%E6%A4%B0%E6%8B%BF%E9%93%81&food=大肠刺身&face=🎉'
		})
	).toEqual({
		path: '/home/index',
		params: {
			drink: '冰吸生椰拿铁',
			food: '大肠刺身',
			face: '🎉',
			name: 'John Doe',
			city: 'New York',
			is: 'a=good=day',
			info: '',
			detail: ''
		},
		primary_fullPage: 'https://www.example.com',
		primary_search: 'name=John%20Doe&city=New%20York&&is=a=good=day&info=null&detail=undefined',
		primary_origin: 'https://www.example.com',
		primary_page: '',
		primary_protocol: 'https',
		primary_host: 'www.example.com',
		primary_hostname: 'www.example.com',
		primary_port: '',
		primary_objSearch: { name: 'John Doe', city: 'New York', is: 'a=good=day', info: '', detail: '' },
		hash_router: '/home/index',
		hash_query: 'drink=%E5%86%B0%E5%90%B8%E7%94%9F%E6%A4%B0%E6%8B%BF%E9%93%81&food=大肠刺身&face=🎉',
		hash_objQuery: { drink: '冰吸生椰拿铁', food: '大肠刺身', face: '🎉' }
	});
});

test('用例4', () => {
	expect(
		parseUrl({
			url: 'https://www.example.com?name=John%20Doe&city=New%20York&&is=a=good=day&info=null&detail=undefined#/home/index?drink=%E5%86%B0%E5%90%B8%E7%94%9F%E6%A4%B0%E6%8B%BF%E9%93%81&food=大肠刺身&face=🎉',
			isVerify: false
		})
	).toEqual({
		path: '/home/index',
		params: {
			drink: '冰吸生椰拿铁',
			food: '大肠刺身',
			face: '🎉',
			name: 'John Doe',
			city: 'New York',
			is: 'a=good=day',
			info: 'null',
			detail: 'undefined'
		},
		primary_fullPage: 'https://www.example.com',
		primary_search: 'name=John%20Doe&city=New%20York&&is=a=good=day&info=null&detail=undefined',
		primary_origin: 'https://www.example.com',
		primary_page: '',
		primary_protocol: 'https',
		primary_host: 'www.example.com',
		primary_hostname: 'www.example.com',
		primary_port: '',
		primary_objSearch: { name: 'John Doe', city: 'New York', is: 'a=good=day', info: 'null', detail: 'undefined' },
		hash_router: '/home/index',
		hash_query: 'drink=%E5%86%B0%E5%90%B8%E7%94%9F%E6%A4%B0%E6%8B%BF%E9%93%81&food=大肠刺身&face=🎉',
		hash_objQuery: { drink: '冰吸生椰拿铁', food: '大肠刺身', face: '🎉' }
	});
});

test('用例5', () => {
	expect(
		parseUrl({
			url: 'https://www.example.com?name=John%20Doe&city=New%20York&&is=a=good=day&info=null&detail=undefined#/home/index?drink=%E5%86%B0%E5%90%B8%E7%94%9F%E6%A4%B0%E6%8B%BF%E9%93%81&food=大肠刺身&face=🎉',
			isDecode: false
		})
	).toEqual({
		path: '/home/index',
		params: {
			drink: '%E5%86%B0%E5%90%B8%E7%94%9F%E6%A4%B0%E6%8B%BF%E9%93%81',
			food: '大肠刺身',
			face: '🎉',
			name: 'John%20Doe',
			city: 'New%20York',
			is: 'a=good=day',
			info: '',
			detail: ''
		},
		primary_fullPage: 'https://www.example.com',
		primary_search: 'name=John%20Doe&city=New%20York&&is=a=good=day&info=null&detail=undefined',
		primary_origin: 'https://www.example.com',
		primary_page: '',
		primary_protocol: 'https',
		primary_host: 'www.example.com',
		primary_hostname: 'www.example.com',
		primary_port: '',
		primary_objSearch: { name: 'John%20Doe', city: 'New%20York', is: 'a=good=day', info: '', detail: '' },
		hash_router: '/home/index',
		hash_query: 'drink=%E5%86%B0%E5%90%B8%E7%94%9F%E6%A4%B0%E6%8B%BF%E9%93%81&food=大肠刺身&face=🎉',
		hash_objQuery: { drink: '%E5%86%B0%E5%90%B8%E7%94%9F%E6%A4%B0%E6%8B%BF%E9%93%81', food: '大肠刺身', face: '🎉' }
	});
});

test('用例6', () => {
	expect(
		parseUrl({
			url: 'https://www.example.com?name=John%20Doe&city=New%20York&&is=a=good=day&info=null&detail=undefined#/home/index?drink=%E5%86%B0%E5%90%B8%E7%94%9F%E6%A4%B0%E6%8B%BF%E9%93%81&food=大肠刺身&face=🎉',
			isVerify: false,
			isDecode: false
		})
	).toEqual({
		path: '/home/index',
		params: {
			drink: '%E5%86%B0%E5%90%B8%E7%94%9F%E6%A4%B0%E6%8B%BF%E9%93%81',
			food: '大肠刺身',
			face: '🎉',
			name: 'John%20Doe',
			city: 'New%20York',
			is: 'a=good=day',
			info: 'null',
			detail: 'undefined'
		},
		primary_fullPage: 'https://www.example.com',
		primary_search: 'name=John%20Doe&city=New%20York&&is=a=good=day&info=null&detail=undefined',
		primary_origin: 'https://www.example.com',
		primary_page: '',
		primary_protocol: 'https',
		primary_host: 'www.example.com',
		primary_hostname: 'www.example.com',
		primary_port: '',
		primary_objSearch: { name: 'John%20Doe', city: 'New%20York', is: 'a=good=day', info: 'null', detail: 'undefined' },
		hash_router: '/home/index',
		hash_query: 'drink=%E5%86%B0%E5%90%B8%E7%94%9F%E6%A4%B0%E6%8B%BF%E9%93%81&food=大肠刺身&face=🎉',
		hash_objQuery: { drink: '%E5%86%B0%E5%90%B8%E7%94%9F%E6%A4%B0%E6%8B%BF%E9%93%81', food: '大肠刺身', face: '🎉' }
	});
});

test('用例7', () => {
	expect(
		parseUrl({
			url: 'https://www.baidu.com/s?wd=%E4%BD%A0%E7%9A%84%E5%90%8D%E5%AD%97&rsv_spt=1&rsv_iqid=0xeb7352d500678bfa&issp=1&f=3&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=1&rsv_dl=ts_1&oq=url%25E4%25B8%25AD%25E4%25B8%25BA%25E4%25BB%2580%25E4%25B9%2588%25E6%259C%2589%25E4%25BA%259B%25E4%25BC%259A%25E6%258B%25BC%25E6%258E%25A5%25E5%259C%25A8%2523%25E4%25B9%258B%25E5%2589%258D&rsv_btype=t&inputT=8975&rsv_t=8d11qiyMKoGt8wl5OVjvFk2oxocsTzdjE0OcODVk3w3pRJOkmxDSvLgdl%2FS%2BtR8bppPE&rsv_pq=ad3944a200164fcf&rsv_sug3=328&rsv_sug1=175&rsv_sug7=100&rsv_sug2=0&prefixsug=%25E4%25BD%25A0%25E7%259A%2584&rsp=1&rsv_sug4=9113',
			isVerify: false,
			isDecode: false
		})
	).toEqual({
		path: 'https://www.baidu.com/s',
		params: {
			wd: '%E4%BD%A0%E7%9A%84%E5%90%8D%E5%AD%97',
			rsv_spt: '1',
			rsv_iqid: '0xeb7352d500678bfa',
			issp: '1',
			f: '3',
			rsv_bp: '1',
			rsv_idx: '2',
			ie: 'utf-8',
			rqlang: 'cn',
			tn: 'baiduhome_pg',
			rsv_enter: '1',
			rsv_dl: 'ts_1',
			oq: 'url%25E4%25B8%25AD%25E4%25B8%25BA%25E4%25BB%2580%25E4%25B9%2588%25E6%259C%2589%25E4%25BA%259B%25E4%25BC%259A%25E6%258B%25BC%25E6%258E%25A5%25E5%259C%25A8%2523%25E4%25B9%258B%25E5%2589%258D',
			rsv_btype: 't',
			inputT: '8975',
			rsv_t: '8d11qiyMKoGt8wl5OVjvFk2oxocsTzdjE0OcODVk3w3pRJOkmxDSvLgdl%2FS%2BtR8bppPE',
			rsv_pq: 'ad3944a200164fcf',
			rsv_sug3: '328',
			rsv_sug1: '175',
			rsv_sug7: '100',
			rsv_sug2: '0',
			prefixsug: '%25E4%25BD%25A0%25E7%259A%2584',
			rsp: '1',
			rsv_sug4: '9113'
		},
		primary_fullPage: 'https://www.baidu.com/s',
		primary_search:
			'wd=%E4%BD%A0%E7%9A%84%E5%90%8D%E5%AD%97&rsv_spt=1&rsv_iqid=0xeb7352d500678bfa&issp=1&f=3&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=1&rsv_dl=ts_1&oq=url%25E4%25B8%25AD%25E4%25B8%25BA%25E4%25BB%2580%25E4%25B9%2588%25E6%259C%2589%25E4%25BA%259B%25E4%25BC%259A%25E6%258B%25BC%25E6%258E%25A5%25E5%259C%25A8%2523%25E4%25B9%258B%25E5%2589%258D&rsv_btype=t&inputT=8975&rsv_t=8d11qiyMKoGt8wl5OVjvFk2oxocsTzdjE0OcODVk3w3pRJOkmxDSvLgdl%2FS%2BtR8bppPE&rsv_pq=ad3944a200164fcf&rsv_sug3=328&rsv_sug1=175&rsv_sug7=100&rsv_sug2=0&prefixsug=%25E4%25BD%25A0%25E7%259A%2584&rsp=1&rsv_sug4=9113',
		primary_origin: 'https://www.baidu.com',
		primary_page: '/s',
		primary_protocol: 'https',
		primary_host: 'www.baidu.com',
		primary_hostname: 'www.baidu.com',
		primary_port: '',
		primary_objSearch: {
			wd: '%E4%BD%A0%E7%9A%84%E5%90%8D%E5%AD%97',
			rsv_spt: '1',
			rsv_iqid: '0xeb7352d500678bfa',
			issp: '1',
			f: '3',
			rsv_bp: '1',
			rsv_idx: '2',
			ie: 'utf-8',
			rqlang: 'cn',
			tn: 'baiduhome_pg',
			rsv_enter: '1',
			rsv_dl: 'ts_1',
			oq: 'url%25E4%25B8%25AD%25E4%25B8%25BA%25E4%25BB%2580%25E4%25B9%2588%25E6%259C%2589%25E4%25BA%259B%25E4%25BC%259A%25E6%258B%25BC%25E6%258E%25A5%25E5%259C%25A8%2523%25E4%25B9%258B%25E5%2589%258D',
			rsv_btype: 't',
			inputT: '8975',
			rsv_t: '8d11qiyMKoGt8wl5OVjvFk2oxocsTzdjE0OcODVk3w3pRJOkmxDSvLgdl%2FS%2BtR8bppPE',
			rsv_pq: 'ad3944a200164fcf',
			rsv_sug3: '328',
			rsv_sug1: '175',
			rsv_sug7: '100',
			rsv_sug2: '0',
			prefixsug: '%25E4%25BD%25A0%25E7%259A%2584',
			rsp: '1',
			rsv_sug4: '9113'
		},
		hash_router: '',
		hash_query: '',
		hash_objQuery: {}
	});
});

test('用例8', () => {
	expect(
		parseUrl({
			url: 'http://localhost:3030/busCity/#/?type=dep&from=search&cityA=%7B%22id%22%3A0001%2C%22city%22%3A%22%E9%83%91%E5%B7%9E%22%2C%22sid%22%3A%22%22%2C%22sname%22%3A%22%22%7D&cityB=%7B%22id%22%3A0002%2C%22city%22%3A%22%E9%95%BF%E6%B2%99%22%2C%22sid%22%3A%22%22%2C%22sname%22%3A%22%22%7D'
		})
	).toEqual({
		path: '/',
		params: {
			type: 'dep',
			from: 'search',
			cityA: '{"id":0001,"city":"郑州","sid":"","sname":""}',
			cityB: '{"id":0002,"city":"长沙","sid":"","sname":""}'
		},
		primary_fullPage: 'http://localhost:3030/busCity/',
		primary_search: '',
		primary_origin: 'http://localhost:3030',
		primary_page: '/busCity/',
		primary_protocol: 'http',
		primary_host: 'localhost:3030',
		primary_hostname: 'localhost',
		primary_port: '3030',
		primary_objSearch: {},
		hash_router: '/',
		hash_query:
			'type=dep&from=search&cityA=%7B%22id%22%3A0001%2C%22city%22%3A%22%E9%83%91%E5%B7%9E%22%2C%22sid%22%3A%22%22%2C%22sname%22%3A%22%22%7D&cityB=%7B%22id%22%3A0002%2C%22city%22%3A%22%E9%95%BF%E6%B2%99%22%2C%22sid%22%3A%22%22%2C%22sname%22%3A%22%22%7D',
		hash_objQuery: {
			type: 'dep',
			from: 'search',
			cityA: '{"id":0001,"city":"郑州","sid":"","sname":""}',
			cityB: '{"id":0002,"city":"长沙","sid":"","sname":""}'
		}
	});
});

test('用例9', () => {
	expect(
		parseUrl({
			url: 'https://test.ok.cn/detail/index?channel=3&oid=oid9898&uid=uid7878&t=1682516775640#/index/OD999887776655?channel=888&source=1'
		})
	).toEqual({
		path: '/index/OD999887776655',
		params: { source: '1', channel: '3', oid: 'oid9898', uid: 'uid7878', t: '1682516775640' },
		primary_fullPage: 'https://test.ok.cn/detail/index',
		primary_search: 'channel=3&oid=oid9898&uid=uid7878&t=1682516775640',
		primary_origin: 'https://test.ok.cn',
		primary_page: '/detail/index',
		primary_protocol: 'https',
		primary_host: 'test.ok.cn',
		primary_hostname: 'test.ok.cn',
		primary_port: '',
		primary_objSearch: { channel: '3', oid: 'oid9898', uid: 'uid7878', t: '1682516775640' },
		hash_router: '/index/OD999887776655',
		hash_query: 'channel=888&source=1',
		hash_objQuery: { channel: '888', source: '1' }
	});
});

test('用例9', () => {
	expect(
		parseUrl({
			url: 'http://localhost:3030/demo/index.html#/?onlyOne=true&isActive=true&env=production&tcoid=oid111111111&tcuid=uid222222222&oid=oid333333333&channelid=channelid444444444&refid=refid555555555&minaWebViewUrl='
		})
	).toEqual({
		path: '/',
		params: {
			onlyOne: 'true',
			isActive: 'true',
			env: 'production',
			tcoid: 'oid111111111',
			tcuid: 'uid222222222',
			oid: 'oid333333333',
			channelid: 'channelid444444444',
			refid: 'refid555555555',
			minaWebViewUrl: ''
		},
		primary_fullPage: 'http://localhost:3030/demo/index.html',
		primary_search: '',
		primary_origin: 'http://localhost:3030',
		primary_page: '/demo/index.html',
		primary_protocol: 'http',
		primary_host: 'localhost:3030',
		primary_hostname: 'localhost',
		primary_port: '3030',
		primary_objSearch: {},
		hash_router: '/',
		hash_query:
			'onlyOne=true&isActive=true&env=production&tcoid=oid111111111&tcuid=uid222222222&oid=oid333333333&channelid=channelid444444444&refid=refid555555555&minaWebViewUrl=',
		hash_objQuery: {
			onlyOne: 'true',
			isActive: 'true',
			env: 'production',
			tcoid: 'oid111111111',
			tcuid: 'uid222222222',
			oid: 'oid333333333',
			channelid: 'channelid444444444',
			refid: 'refid555555555',
			minaWebViewUrl: ''
		}
	});
});
