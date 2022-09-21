/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  const result = [];
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = product;
    product *= nums[i];
  }

  product = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= product;
    product *= nums[j];
  }
  return result;
};
