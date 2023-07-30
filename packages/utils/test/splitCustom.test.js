import { splitCustom } from '../src';

test('用例1', () => {
	expect(
		splitCustom({
			str: '1,2,3,4,5,6',
			separator: ',',
			limit: 3
		})
	).toEqual(['1', '2', '3,4,5,6']);
});

test('用例2', () => {
	expect(
		splitCustom({
			str: '1,2,3,4,5,6',
			separator: ',',
			limit: 10
		})
	).toEqual(['1', '2', '3', '4', '5', '6', '', '', '', '']);
});

test('用例3', () => {
	expect(
		splitCustom({
			str: '1,,,2,3,4,,5,6',
			separator: ',',
			limit: 4
		})
	).toEqual(['1', '', '', '2,3,4,,5,6']);
});

test('用例4', () => {
	expect(
		splitCustom({
			str: '1,,,2,,3,4,,5,6',
			separator: ',,',
			limit: 3
		})
	).toEqual(['1', ',2', '3,4,,5,6']);
});

test('用例5', () => {
	expect(
		splitCustom({
			str: '1,,,2,,3,4,,5,6',
			separator: ',,',
			limit: 1
		})
	).toEqual(['1,,,2,,3,4,,5,6']);
});

test('用例6', () => {
	expect(
		splitCustom({
			str: 'a=1&b=2&c=3=4&&d=5',
			separator: '&',
			limit: 0
		})
	).toEqual(['a=1', 'b=2', 'c=3=4', '', 'd=5']);
});

test('用例7', () => {
	expect(
		splitCustom({
			str: 'c=3=4',
			separator: '=',
			limit: 2
		})
	).toEqual(['c', '3=4']);
});

// test('用例8', () => {
// 	expect(
// 		splitCustom({
// 			str: 'http://localhost:8080/something',
// 			separator: /(?<!\/)\/(?!\/)/g,
// 			limit: 2
// 		})
// 	).toEqual(['http://localhost:8080', 'something']);
// });

// test('用例9', () => {
// 	expect(
// 		splitCustom({
// 			str: 'https://www.example.com',
// 			separator: /(?<!\/)\/(?!\/)/g,
// 			limit: 2
// 		})
// 	).toEqual(['https://www.example.com', '']);
// });

// test('用例10', () => {
// 	expect(
// 		splitCustom({
// 			str: 'http://localhost:3000/busCity/',
// 			separator: /(?<!\/)\/(?!\/)/g,
// 			limit: 2
// 		})
// 	).toEqual(['http://localhost:3000', 'busCity/']);
// });
