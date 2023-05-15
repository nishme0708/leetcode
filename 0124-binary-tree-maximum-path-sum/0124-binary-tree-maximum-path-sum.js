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
    if(root.left == null && root.right ==null) return root.val;
    function traverse(node) {
        
        if(!node) return 0;
        
        let left = traverse(node.left);
        let right = traverse(node.right);
        let self = node.val;
        let pathMax = Math.max(self, self+left,self+right);
        max = Math.max(max, pathMax, self + left + right);
        console.log(self,left,right,pathMax,max);
        return pathMax;
    }  
    traverse(root);
    return max;
};