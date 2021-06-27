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
    
    let total =0;
    let carry = 0;
    let head;
    let res;
    
    //since this is reverse number we have to carry over the value post first addition
    while(l1 || l2) {
        let num = 0;    
        if(l1) {
            num += l1.val;
            l1 = l1.next;
        }
        if(l2) {
            num += l2.val;
            l2 = l2.next;
        }
        if(carry) {
            num = num + carry;
            carry = 0;
        }
        if(num > 9) {
            num = num %10;
            carry = 1;
        }
        if(res) {
            res.next = new ListNode(num);
            res = res.next;
        }else{
            res = new ListNode(num);
            head = res;
        }        
    }
    if(carry) {
        res.next = new ListNode(1);
    }    
    return head;
};