const { NotImplementedError } = require("../extensions/index.js");

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
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let isDiscardNext = false;

  return arr.reduce((arrRez, item, ind) => {
    if (isDiscardNext) {
      isDiscardNext = false;
      return arrRez;
    }

    if (item === "--discard-next") {
      isDiscardNext = true;
      return arrRez;
    }

    if (item === "--discard-prev") {
      if (ind > 0) {
        arrRez.pop();
      }
      return arrRez;
    }

    if (item === "--double-next") {
      if (ind < arr.length - 1) {
        arrRez.push(arr[ind + 1]);
      }
      return arrRez;
    }

    if (item === "--double-prev") {
      if (ind > 0 && ind - 2 > 0 && arr[ind - 2] !== "--discard-next") {
        arrRez.push(arr[ind - 1]);
      }
      return arrRez;
    }

    arrRez.push(item);
    return arrRez;
  }, []);
}

module.exports = {
  transform,
};
