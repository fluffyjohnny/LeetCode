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
 * @return {TreeNode}
 */
const invertTree = function (root) {
  
  const reverseNodes = (node) => {
    if (node === null) return;
    reverseNodes(node.left);
    reverseNodes(node.right);

    let tempNode = node.left;
    node.left = node.right;
    node.right = tempNode;
  };

  reverseNodes(root);
  return root;

  // let stack = [root];
  // while (stack.length > 0) {
  //   let node = stack.pop();
  //   if (node !== null) {
  //     let tempNode = node.left;
  //     node.left = node.right;
  //     node.right = tempNode;

  //     stack.push(node.left);
  //     stack.push(node.right);
  //   }
  // }
  // return root;
};
