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
var removeNthFromEnd1 = function(head, n) {
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

var removeNthFromEnd = function(head, n) {
    let headCopy = head;
    let tail = head;
    for(let i = 0;i<n && tail!=null;i++){
        tail = tail.next;
    }
    if(!tail) {
        return head.next;
    }
    while(tail?.next!=null) {
        headCopy = headCopy.next;
        tail = tail.next;
    }
    console.log(headCopy,tail);
    
    headCopy.next = headCopy.next?.next || null;
    return head;
};