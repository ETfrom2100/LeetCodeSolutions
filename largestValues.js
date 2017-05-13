/**
You need to find the largest value in each row of a binary tree.

Example:
Input: 

          1
         / \
        3   2
       / \   \  
      5   3   9 

Output: [1, 3, 9]
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
var largestValues = function(root) {
    let res = [];
    let findMaxVal = (node,depth) =>{
        if(node === null) return;
        if(res[depth] === undefined)
        {
            res[depth] = node.val;
        }
        else
        {
            res[depth] = Math.max(node.val,res[depth]);
        }
        if(node.left !== null) findMaxVal(node.left,depth+1);
        if(node.right !==null) findMaxVal(node.right,depth+1);
    }
    findMaxVal(root,0);
    return res;
};