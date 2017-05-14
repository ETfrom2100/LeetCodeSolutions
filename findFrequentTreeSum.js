/**
Given the root of a tree, you are asked to find the most frequent subtree sum. The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself). So what is the most frequent subtree sum value? If there is a tie, return all the values with the highest frequency in any order.

Examples 1
Input:

  5
 /  \
2   -3
return [2, -3, 4], since all the values happen only once, return all of them in any order.
Examples 2
Input:

  5
 /  \
2   -5
return [2], since 2 happens twice, however -5 only occur once.
Note: You may assume the sum of values in any subtree is in the range of 32-bit signed integer.
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
var findFrequentTreeSum = function(root) {
    let map={};
    let res = [];
    let maxCount = 0;
    substreeSum(root);
    for(let key in map)
    {
        if(map[key] === maxCount)
            res.push(parseInt(key));
    }
    return res;
    function substreeSum(node){
        if(node === null) return 0;
        var left_sum = substreeSum(node.left);
        var right_sum = substreeSum(node.right);
        var sum = node.val + left_sum + right_sum;
        map[sum] = ~~map[sum] + 1;
        maxCount = Math.max(maxCount,map[sum]);
        return sum;
    }
};