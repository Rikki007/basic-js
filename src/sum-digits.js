const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (n.toString().length === 1) {
    return parseInt(n);
  }
  if (n.toString().length > 1) {
    const m = parseInt(n.toString()[0]) + getSumOfDigits(n.toString().slice(1));
    return getSumOfDigits(m);
  }
}

module.exports = {
  getSumOfDigits,
};
