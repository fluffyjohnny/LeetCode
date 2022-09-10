/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {
  const convToBST = (arr, start, end) => {
    if (start > end) {
      return null;
    }
    const mid = Math.ceil((start + end) / 2);
    const root = new TreeNode(nums[mid]);

    root.left = convToBST(arr, start, mid - 1);
    root.right = convToBST(arr, mid + 1, end);

    return root;
  };

  return convToBST(nums, 0, nums.length - 1);
};