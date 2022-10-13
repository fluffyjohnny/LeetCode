/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function (nums) {
  const sum = nums.reduce((a, b) => a + b, 0);

  // If the sum cannot be divided by 2, that means the array cannot be divided into 2 subsets, too.
  if (sum % 2) {
    return false;
  }

  // Find the half of the sum. This would be the sum of the elements of the either of the subsets.
  const half = sum / 2;

  // If any of the elements is greater than the half of the sum, then equal subsets are not possible.
  if (Math.max(...nums) > half) {
    return false;
  }

  // This array will keep track of the sums that can be reached by the numbers.
  const reach = new Array(half + 1).fill(false);

  // You can reach the sum of 0 by adding nothing, therefore, reach[0] = true.
  reach[0] = true;

  // Iterate over the nums array
  for (let num of nums) {
    // We need to check if half of the sum can be reached or not
    for (let i = half; i >= num; i--) {
      // If the sum without the current number can be reached, then the sum with the number can be reached, too.
      if (reach[i - num]) {
        reach[i] = true;

        // If half of the sum can be reached, return true.
        if (reach[half]) {
          return true;
        }
      }
    }
  }

  // If half of the sum can be reached, return false.
  return false;
};
