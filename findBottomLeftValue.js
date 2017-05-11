/**
Given a binary tree, find the leftmost value in the last row of the tree.

Example 1:
Input:

    2
   / \
  1   3

Output:
1
Example 2: 
Input:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

Output:
7
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
var findBottomLeftValue = function(root) {
    var map = [];
    var depth = 0;
    traverse(root,depth);
    
    //return map[Math.max.apply(null,Object.keys(map))];
    return map.pop();
    function traverse(node,depth){
        
        if(node !== null){
            depth++;
            if(map[depth] === undefined) map[depth] = node.val;
            traverse(node.left,depth);
            traverse(node.right,depth);
        } 
        
    }
};