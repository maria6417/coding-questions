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
   if (!head || !head.next) return head;
    const stack = [];
    
    while(head) {
        stack.push(head);
        head = head.next;
    }
    
    const newHead = stack[stack.length - 1];
    while(stack.length) {
        head = stack.pop();
        head.next = stack[stack.length - 1] || null;
    }
    return newHead;
}; 