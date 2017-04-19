/**
You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    
    if(root === null)
    {
        return 0;
    }
    
    return findPaths(root,sum)+pathSum(root.left, sum)+ pathSum(root.right,sum);
        
    
};
var findPaths = function(root,sum){
    var counter = 0;
    if(root === null)
    {
        return 0;
    }
    if(root.val === sum)
    {
        counter++;
    }
    counter += findPaths(root.left, sum-root.val) + findPaths(root.right, sum-root.val);
    return counter;
};
