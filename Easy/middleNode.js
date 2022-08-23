/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function (head) {
  let A = [head];
  while (A[A.length - 1].next) {
    A.push(A[A.length - 1].next);
  }
  return A[Math.floor(A.length / 2)];
};
