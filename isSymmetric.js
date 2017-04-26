/**
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
//iterative solution
var isSymmetric = function(root) {
    if(root === null) return true;
    var arr = [];
    var left,right;
    if(root.left!==null)
    {
        if(root.right === null) return false;
        arr.push(root.left,root.right);
    }
    else
    {
        if(root.right !== null) return false;
        return true;
    }
    while(arr.length>0)
    {
        if(arr.length % 2 !==0) return false;
        right = arr.pop();
        left = arr.pop();
        if(left.val !== right.val) return false;
        
        if(left.left !== null)
        {
            if(right.right === null) return false;
            arr.push(left.left,right.right);
        }
        else if(right.right !== null)
        {
            return false;
        }
        if(left.right !== null)
        {
            if(right.left === null) return false;
            arr.push(left.right,right.left);
        }
        else if(right.left !== null)
        {
            return false;
        }
        
    }
    return true;
};

//recursive solution
var isSymmetric = function(root) {
    return root === null || symmetricHelper(root.left,root.right);
    
    function symmetricHelper(left,right)
    {
        if(left === null || right === null)
        {
            return left === right;
        }
        else if(left.val !== right.val)
        {
            return false;
        }
        else
        {
            return symmetricHelper(left.left,right.right) && symmetricHelper(left.right,right.left);
        }
    }
    
    
};