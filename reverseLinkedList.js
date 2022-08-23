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
 var reverseList = function(head) {
  if (!head) return null;
  let stack = [];
  while (head && head.next) {
      stack.push(head);
      head = head.next;
  }
  let currentNode = head;
  while (stack.length) {
      currentNode.next = stack.pop();
      currentNode = currentNode.next;
  }
  currentNode.next = null;
  return head;
};