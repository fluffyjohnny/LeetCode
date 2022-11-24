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
 * @return {number[]}
 */
const inorderTraversal = function (root) {
  const list = [];
  const _inorder = (root) => {
    if (!root) return;
    _inorder(root.left);
    list.push(root.val);
    _inorder(root.right);
  };
  _inorder(root);
  return list;
};
