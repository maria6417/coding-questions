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
    if (!head) return head;
    // continue pushing the node to stack until the next is null.
    // take out from stack, and keep track of the first as head
    // set it's next to the next on stack if exists, if not, set as null
    // return new head
    
    const stack = [];
    while(head) {
        stack.push(head);
        head = head.next;
    }
    let newHead = stack[stack.length - 1];
    while (stack.length) {
        head = stack.pop();
        head.next = stack[stack.length - 1] || null;
    }
    return newHead;
}; 