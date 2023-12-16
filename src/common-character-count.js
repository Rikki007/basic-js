const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split("");
  const arr2 = s2.split("");
  let tester = [];
  let tested = [];
  let sum = 0;
  if (arr1.length <= arr2.length) {
    tester = arr1;
    tested = arr2;
  } else {
    tester = arr2;
    tested = arr1;
  }

  tester.forEach((item) => {
    if (tested.includes(item)) {
      sum += 1;
      tested.splice(tested.indexOf(item), 1);
    }
  });
  return sum;
}

module.exports = {
  getCommonCharacterCount,
};
