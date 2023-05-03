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
var maxPathSum = function(root) {
    let max = Number.NEGATIVE_INFINITY;
    function traverse(node){
        if(!node) return Number.NEGATIVE_INFINITY;
        let val = node.val;
        let left = traverse(node.left);
        let right = traverse(node.right);
        let maxSingle = Math.max(left+val,right+val,val);
        let only = left+right+val;
        max = Math.max(max, only, maxSingle);
        // console.log(left, right, maxSingle,only,max)
        return maxSingle;
    }
    let node = root;
    traverse(node);
    return max;
};