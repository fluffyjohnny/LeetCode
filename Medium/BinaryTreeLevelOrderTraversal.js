/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  let count = 0;
  let depths = {};

  // Function to separate levels by storing in a has
  const countDepth = (node, count) => {
    if (!node) {
      return;
    }

    if (count in depths) {
      depths[count].push(node.val);
    } else {
      depths[count] = [];
      depths[count].push(node.val);
    }

    countDepth(node.left, count + 1);
    countDepth(node.right, count + 1);
  };

  countDepth(root, count);
  return Object.values(depths);
};
