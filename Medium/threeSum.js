/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let obj = {};
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    // do two sum here
    const target = -nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let curr = nums[left] + nums[right];
      if (curr > target) {
        right--;
      } else if (curr < target) {
        left++;
      } else {
        let arr = [-target, nums[left], nums[right]];
        if ((obj[arr] = 1)) {
          obj[arr] = 1;
          result.push(arr);
        }
        left++;
        right--;
      }
    }
  }
  return result;
};

console.log(threeSum([1, 0, -1, 3, 2, -4]));
