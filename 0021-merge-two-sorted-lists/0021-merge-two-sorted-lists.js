/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    // define newHead
    let newHead = null;
    // declare lastNode
    let lastNode = null;
    // declare pointer for both list1 & list2
    let p1 = list1;
    let p2 = list2;
    // while they both are not null
    while(p1 && p2) {
        if (p1.val > p2.val) {
            setNode(p2);
            p2 = p2.next;
        } else {
            setNode(p1);
            p1 = p1.next;
        } 
    }
    
    while (p1) {
        setNode(p1);
        p1 = p1.next;
    }
    
    while (p2) {
        setNode(p2);
        p2 = p2.next;
    }   
        // if list1 > list2
            // set list2 as newHead if undefined
            // set list2 as next of lastNode if exists, and set lastNode to self
        // if list2 > list2
            // do same but for list2
        // if list1 = list2
            // while "next" is same, continue checking next
            // when next is different, then set bigger one's list to lastNode
    
    // once exits, while list1
        // keep setting node
    // while list2
        // keep setting node
    
    // return newHead
    
    function setNode(node) {
        if (!newHead) {
            newHead = node;
        }
        if (lastNode) {
            lastNode.next = node;
        }
        lastNode = node;
    }
    
    return newHead;
};