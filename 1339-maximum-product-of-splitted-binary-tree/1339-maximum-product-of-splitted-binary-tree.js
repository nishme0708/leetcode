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
var maxProduct = function(root) {
    let MOD = Math.pow(10,9)+7;
    let arr = [];
    function dfs(node) {
        if(!node) return 0;
        if(node.left == null && node.right ==null) return node.val;
        let left = dfs(node.left);            
        let right = dfs(node.right);
        
        if(left) {
            arr.push(left);
        }
        if(right) {
            arr.push(right);
        }
        return node.val+ left + right;
    }

    let total = dfs(root);
    let max = 0;
    for(let item of arr) {
        max = Math.max(max, (total-item)*item);
    }
    return max % MOD;
};