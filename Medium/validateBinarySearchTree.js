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
const isValidBST = function (root) {
  let prev;

  let valid = true;

  const inorder = (node) => {
    if (!node || !valid) {
      return;
    }

    inorder(node.left);

    if (prev >= node.val) {
      /**
       * In order traversal, for valid binary tree,
       * nodes value keep increasing. So, considering that
       * just keep the previous value in memory,
       * if the previous value is greater than current node value
       * it is violation.
       * Set a valid flag to false, and early return.
       **/
      valid = false;
      return;
    }

    prev = node.val;

    inorder(node.right);
  };

  inorder(root);

  return valid;
};
