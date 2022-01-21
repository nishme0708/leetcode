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
    // traverse to remove all the leaf nodes 
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
    //loop while we only have root node left
    while(root!=null) {
        let arr = [];
        root = traverse(root,arr);
        res.push(arr);
    }
    return res;
};


