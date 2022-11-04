/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  let tem = head;
  while (n > 0) {
    tem = tem.next;
    n--;
  }
  if (tem === null) return head.next;
  let res = head;
  while (tem.next !== null) {
    head = head.next;
    tem = tem.next;
  }
  head.next = head.next.next;
  return res;
};
