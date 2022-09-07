/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const target = -nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (right > left) {
      let sum = nums[left] + nums[right];
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right --;

        left ++;
        right --;
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, 4]));
