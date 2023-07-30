import { sayHello } from '../src';

test('用例1', () => {
	expect(sayHello('1212')).toBe('1212');
});

test('用例2', () => {
	expect(sayHello('')).toBe('');
});

test('用例3', () => {
	expect(sayHello(null)).toBeNull();
});

test('用例4', () => {
	expect(sayHello(undefined)).toBe('Hello.....');
});

test('用例5', () => {
	expect(sayHello(0)).toBe(0);
});

test('用例6', () => {
	expect(sayHello()).toBe('Hello.....');
});

test('用例7', () => {
	expect(sayHello({ a: '22', b: '33' })).toEqual({ a: '22', b: '33' });
});

test('用例8', () => {
	expect(sayHello([1, 2, 3])).toEqual([1, 2, 3]);
});
