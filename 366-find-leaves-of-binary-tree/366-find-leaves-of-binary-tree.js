/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var findLeaves = function(root) {
    function traverse(node,res) {
        if(node == null ) return null;
        if(node.left == null && node.right == null) {
            res.push(node.val);
            return null;
        }
        node.left = traverse(node.left,res);
        node.right = traverse(node.right, res);
        return node;
    }
    let res = [];
    while(root.left !=null || root.right!=null) {
        let arr = [];
        traverse(root,arr);
        res.push(arr);
    }
    res.push([root.val]);
    return res;
};

function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}
var btree = function(arr,i=0) {    
    if(i>arr.length) return null;
    let root = new Node(arr[i]);
    root.left = btree(arr,2*i+1);
    root.right = btree(arr,2*i+2);
    return root;
    
}
