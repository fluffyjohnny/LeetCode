/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  let left = 0;
  let right = x;
  let mid;

  while (left < right) {
    mid = Math.ceil((left + right) / 2);
    if (mid * mid <= x && (mid + 1) * (mid + 1) > x) return mid; // 2.
    if (mid * mid < x) left = mid; // 3.
    else right = mid; // 4.
  }

  return right;
};
