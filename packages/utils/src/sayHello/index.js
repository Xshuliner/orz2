/**
 * @function
 * @name sayHello
 * @description 输出输入的内容，如果不输入则输出Hello.....
 * @param {string} str - 内容
 * @returns {string}
 *
 * @example <caption>传入'wellwell'</caption>
 * sayHello('wellwell')
 * =>
 * 'wellwell'
 *
 * @example <caption>什么都不传入</caption>
 * sayHello()
 * =>
 * 'Hello.....'
 */

const sayHello = (str = 'Hello.....') => {
	return str;
};

export default sayHello;
