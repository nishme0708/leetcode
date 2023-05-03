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
    let res =[];
    let total = 0;
    let headCopy = head;
    while(headCopy!=null) {
        total++;
        res.push(headCopy);
        headCopy = headCopy.next;
    }
    let pos = total - n;
    if(res[pos-1]) {
        let next = null;
        if(res[pos+1]) {
            next = res[pos+1];
        }
        res[pos-1].next = next;
    } else {
        head = head.next;
    }
    return head;
};