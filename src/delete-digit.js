const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0,
        digits = [];
    while (num) {
        digits.push(num % 10);
        num = Math.floor(num / 10);
    }
    for (let index_num = 0; index_num < digits.length; index_num++) {
        let n = 0;
        for (var i = digits.length - 1; i >= 0; i--) {
            if (i !== index_num) {
                n = n * 10 + digits[i];
            }
        }
        result = Math.max(n, result);
    }
    return result;
}

module.exports = {
  deleteDigit
};
