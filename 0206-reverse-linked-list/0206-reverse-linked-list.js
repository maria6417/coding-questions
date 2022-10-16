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
    // continue pushing the node to stack until the next is null.
    // take out from stack, and keep track of the first as head
    // set it's next to the next on stack if exists, if not, set as null
    // return new head
    
    // recursively
    // return itself when the next is null
    // otherwise, set its next to
    const newHead = reverseList(head.next);
    let curr = head.next;
    head.next = null;
    curr.next = head;
    return newHead;
}; 