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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let max = 0;
    
    function traverse(node) {
        if(node == null) return 0;
        if(node.left == null && node.right == 0) return 1;
        let left = traverse(node.left);
        let right = traverse(node.right);
        let path = 1 + Math.max(left, right);
        //self check 
        max = Math.max(max, left+right+1);
        return path;
    }
    if(root) {
    traverse(root);
    max--;
    }
    return max;
};