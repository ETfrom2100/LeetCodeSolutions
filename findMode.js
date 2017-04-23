/**
Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
For example:
Given BST [1,null,2,2],
   1
    \
     2
    /
   2
return [2].

Note: If a tree has more than one mode, you can return them in any order.

Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).
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
 * @return {number[]}
 */
var findMode = function(root) {
    var map = {};
    var result = [];
    var max = 0;
    var helper = function(node){
        if(node === null)
        {
            return;
        }
        if(map[node.val] === undefined)
        {
            map[node.val] = 1;
        }
        else
        {
            map[node.val]++;
        }
        helper(node.left);
        helper(node.right);
    }
    helper(root);
    
    for(var i in map)
    {
       if(map[i] >= max)
       {
           max = map[i];
       }
        
    }
    for(var j in map)
    {
        if(map[j] == max)
        {
            result.push(parseInt(j,10));
        }
    }
    return result;
   
};