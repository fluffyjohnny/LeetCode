/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let max = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(currentSum + nums[i], nums[i]);

    max = Math.max(currentSum, max);
  }

  return max;
};
