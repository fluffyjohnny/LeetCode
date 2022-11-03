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
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (root, k) {
  let vals = [];
  const inOrder = (node) => {
    if (vals.length !== k) {
      //no need to keep going after reach k-th number
      if (node.left) inOrder(node.left); //go left first
      vals.push(node.val); //finished going left, now start adding values
      if (node.right) inOrder(node.right); //if have right, go there and repeat process
    }
  };

  inOrder(root); // IFFE Immediately Invoking Function Expression, starting from root.
  return vals[k - 1]; //return element, but as i mentioned in the descript, don't need this full array, just the k-th elm
};
