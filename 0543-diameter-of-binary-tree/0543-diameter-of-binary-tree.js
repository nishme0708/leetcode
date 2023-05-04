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
        if(!node ) return 0;
        if(node.left == null && node.right == null) return 1;
        let left = traverse(node.left);
        let right = traverse(node.right);
        let singleMax = Math.max(left,right) + 1;
        let only = left + right + 1;
        console.log(left,right,singleMax,only);
        max = Math.max(singleMax, only,max);
        return singleMax;
    }
    traverse(root);
    return max == 0 ? max : max - 1;
};