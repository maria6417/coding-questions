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
    // while(head && head.val !== null) {
    //     if (head.val === 'seen') return true;
    //     head.val = 'seen';
    //     head = head.next;
    // }
    // return false;
    
    let slow = head, fast = head?.next?.next || null;
    while (slow && fast) {
        if (slow === fast) return true;
        slow = slow.next;
        fast = fast?.next?.next || null;
    }
    return false;
};