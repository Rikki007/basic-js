const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrFilter = arr.filter((item) => item !== -1).sort((a, b) => a - b);
  arr.forEach((item, i) => {
    if (arr[i] === -1) {
      arrFilter.splice(i, 0, arr[i]);
    }
  });
  return arrFilter;
}

module.exports = {
  sortByHeight,
};
