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
    if(list1 == null && list2 == null ) return null;
    if(list1 == null) return list2;
    if(list2 == null) return list1;
    
    let head = null;
    let tail = null;
    while(list1!=null && list2!=null) {
        let a = list1.val;
        let b = list2.val;
        
        if(a<b) {
            if(!head) {
                head = list1;
                tail = list1;
             } else {
                 tail.next = list1;
                 tail = tail.next;
             }
            list1 = list1.next;
        } else {
            if(!head) {
                head = list2;
                tail = list2;
            } else {
                tail.next = list2;
                tail = tail.next;
            }
            list2 = list2.next;
        }
    }
    
    if(!list1) {
        tail.next = list2;
    } else if(!list2) {
        tail.next = list1;
    }
    return head;
    
};