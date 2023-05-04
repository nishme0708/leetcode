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
    function traverse(node) {
        if(!node) return 0;
        // if(node.left == null && node.right == null) return node.val;
        let left = traverse(node.left);
        let right = traverse(node.right);
        let val = node.val;
        let singleMax = Math.max(left+val, right + val, val);
        console.log(left, right, val, singleMax);
        let only = left + right + val;
        max = Math.max(max, only, singleMax);
        return singleMax;
    }
    traverse(root);
    return max;
};