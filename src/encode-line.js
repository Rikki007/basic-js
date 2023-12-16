const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let calc = 1;
  let arr = [];
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      calc += 1;
    } else {
      if (calc === 1) {
        arr.push(str[i]);
      } else {
        arr.push(calc);
        arr.push(str[i]);
        calc = 1;
      }
    }
  }
  return arr.join("");
}

module.exports = {
  encodeLine,
};
