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
var countNodes = function(root) {
if(!root) return 0;
if(root.left == null && root.right == null) return 1;

let left = leftTreeHeight(root);
let right = rightTreeHeight(root);
if(left == right) {
    return Math.pow(2,left) -1;
} else {
    return 1 + countNodes(root.left) + countNodes(root.right);
}
};

function leftTreeHeight(node) {
    let h = 0;
    while(node) {
        h++;
        node = node.left;
    }
    return h;
}

function rightTreeHeight(node) {
    let h = 0;
    while(node) {
        h++;
        node = node.right;
    }
    return h;
}

