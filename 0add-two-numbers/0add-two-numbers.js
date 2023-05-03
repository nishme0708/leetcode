/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(l1 == null && l2 == null ) return 0;
    let head = null;
    let tail = null;
    let carry = 0;
    
    while(l1 != null || l2 !=null) {
        let left = l1?.val || 0;
        let right = l2?.val || 0;
        let total = left+right+carry;
        carry = Math.floor(total / 10);
        let mod = total % 10;
        let node = new ListNode(mod, null);
        
        if(!head) {
            head = node;
            tail =node;
        } else {
            tail.next = node;
            tail = node;
        }
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next; 
    }
    if(carry) {
        let node = new ListNode(carry, null);
        tail.next = node;
        tail = node;
    }
    return head;
   
};