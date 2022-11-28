/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  const temp = {};

  for (let i = 0; i < nums.length; i++) {
    if (!temp[nums[i]]) {
      temp[nums[i]] = true;
    } else {
      delete temp[nums[i]];
    }
  }

  return Object.keys(temp)[0];
};

console.log(singleNumber([2, 2, 1]));
