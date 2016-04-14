/**
 * 传入数字和位数，得到补零的字符串，超出的位数去掉
 * @param  {Number} number 	数字
 * @param  {Number} digit   需要的位数
 * @return {String}     	补零的字符串
 * @author TaNg
 * @dateTime	2016-04-14T10:49:08+0800
 */

//ES6
// module.exports = (number = '', digit = 0) => (Array(digit).join(0) + number).slice(-digit);

//ES5
module.exports = function(number, digit) {
  return !number ? '' : !digit ? number : (Array(digit).join(0) + number).slice(-digit);
}
