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
var removeNthFromEnd = function(head, n) {
    const tracker = [];
    let node = head;
    while(node){
        tracker.push(node);
        node = node.next;
    }
    
    if (tracker.length === n) {
        let temp = head;
        head = head.next;
        temp.next = null;
    } else {
        tracker[tracker.length - n - 1].next = tracker[tracker.length - n].next;
    }
    
    return head;
};