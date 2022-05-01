const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      let result = arr.slice(0, i) + "," + arr.slice(i + 2);
      let newResult = result;
      return newResult;
    } else if (arr[i] === '--discard-prev') {
      let result = arr.slice(0, i - 1) + "," + arr.slice(i + 1);
      let newResult = result;
      return newArray;
    } else if (arr[i] === '--double-next') {
      let result = arr.slice(0, i) + "," + arr[i + 1] + "," + arr.slice(i + 1);
      let newResult = result;
      return newResult;
    } else if (arr[i] === '--double-prev') {
      let result = arr.slice(0, i) + "," + arr[i - 1] + "," + arr.slice(i + 1);
      let newResult = result;
      return newResult;
    }
  }
}

module.exports = {
  transform
};
