/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head) return null;
    let headCopy = head;
    
    
    while(headCopy != null) {
        let node = new Node(headCopy.val,headCopy.next,headCopy.random);
        headCopy.next = node;
        headCopy = node.next;
    }
    headCopy = head;
    while(headCopy != null){
        if(headCopy.next.random !=null )
            headCopy.next.random = headCopy.next.random.next;
        headCopy = headCopy.next.next;
    }
    headCopy = head;
    let res = headCopy.next;
    while(headCopy!=null) {
        let orig = headCopy;
        let dup = headCopy.next;
        let next = dup.next;
        orig.next = next;
        if(next) {
            dup.next = next.next;
        } else {
            dup.next = null;
        }
        headCopy = next;
    }
    return res
};