/**
 * @function
 * @name splitCustom
 * @description 自定义分割字符串
 * @param {string} options.str
 * @param {string} options.separator
 * @param {number} options.limit
 * @returns {string}
 */
const splitCustom = (options) => {
	const { str = '', separator = '', limit = 0 } = options || {};
	let result = str.split(separator);
	if (limit > 0) {
		const index = limit - 1;
		const arrLeft = result.slice(0, index);
		const arrRight = result.slice(index);
		if (arrRight.length > 0) {
			result = [...arrLeft, `${arrRight.join(separator)}`];
		} else {
			result = arrLeft;
		}
	}
	// 用空字符串补全数组
	if (result.length < limit) {
		const nEmptyCount = limit - result.length;
		const arrEmptyList = new Array(nEmptyCount).fill('');
		result = result.concat(arrEmptyList);
	}
	return result;
};

export default splitCustom;
