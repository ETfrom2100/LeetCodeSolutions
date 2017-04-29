/**
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(root === null) return 0;
    var left_depth = minDepth(root.left);
    var right_depth = minDepth(root.right);
    if(root.left === null || root.right === null)
        return left_depth+right_depth+1;
    return Math.min(left_depth,right_depth) +1;
};