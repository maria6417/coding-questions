/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const dummy = new ListNode(null);
    tail = dummy;
    
    while (true) {
        let min = null;
        for (let i = 0; i < lists.length; i++) {
            if (!lists[i]) continue;
            // check each list's head whether its the min
            if (min === null || lists[min].val > lists[i].val) {
                min = i;
            }
            // update min to its index in array if min
        }
        if (min === null) break;
        // update tail to be the min head
        // if (!lists[min]) {
        //            console.log(lists); 
        // }
        tail.next = lists[min]
        tail = lists[min];
        // update array's index to head's next
        lists[min] = lists[min].next;
        // if null then remove from array
    }
    
    return dummy.next;
    
};