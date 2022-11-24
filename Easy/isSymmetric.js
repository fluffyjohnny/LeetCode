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
 * @return {boolean}
 */
const isSymmetric = function (root) {
  if (!root) return root;

  // isMirrored function
  const isMirrored = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right) return false;
    return (
      left.val === right.val &&
      isMirrored(left.left, right.right) &&
      isMirrored(left.rigrht, right.left)
    );
  };
  // traverse
  return isMirrored(root.left, root.right);
};
