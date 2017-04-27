/**
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
*//**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
//top down solution
var isBalanced = function(root) {
    if(root === null) return true;
    
    var left_depth = getDepth(root.left);
    var right_depth = getDepth(root.right);
    
    if(Math.abs(left_depth-right_depth)<=1 && isBalanced(root.left) && isBalanced(root.right))
        return true;
    return false;
    
    function getDepth(node)
    {
        if(node === null) return 0;
        return Math.max(getDepth(node.left),getDepth(node.right)) + 1;
        
    }   
};


//bottom up solution
var isBalanced = function(root) {
    if(root === null) return true;
    return calcHeight(root) !== -1;
    
    
    function calcHeight(node)
    {
        if(node === null) return 0;
        var left_height = calcHeight(node.left);
        if(left_height === -1) return -1;
        var right_height = calcHeight(node.right);
        if(right_height=== -1) return -1;
        
        if(Math.abs(left_height-right_height) > 1)
            return -1;
        return Math.max(left_height,right_height) + 1;
        
    }   
};