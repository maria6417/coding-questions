/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    while(head && head.val !== null) {
        if (head.val === 'seen') return true;
        head.val = 'seen';
        head = head.next;
    }
    return false;
};