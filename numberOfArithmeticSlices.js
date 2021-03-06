/**
A sequence of number is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

For example, these are arithmetic sequence:

1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9
The following sequence is not arithmetic.

1, 1, 2, 5, 7

A zero-indexed array A consisting of N numbers is given. A slice of that array is any pair of integers (P, Q) such that 0 <= P < Q < N.

A slice (P, Q) of array A is called arithmetic if the sequence:
A[P], A[p + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this means that P + 1 < Q.

The function should return the number of arithmetic slices in the array A.


Example:

A = [1, 2, 3, 4]

return: 3, for 3 arithmetic slices in A: [1, 2, 3], [2, 3, 4] and [1, 2, 3, 4] itself.
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    if(A.length <= 2) return 0;
    var count = 0;
    for(let i= 0;i<A.length;i++)
    {
        for(let len = 3;len<=A.length;len++)
        {
            if(isArithmetic(A,i,i+len-1))
            {
                count++;
            }
        }
    }
    
    return count;
    function isArithmetic(nums,start,end)
    {
        if(end - start < 2)
        {
            return false;
        }
        else
        {
            let diff = nums[start] - nums[start+1];
            start++;
            while(start < end)
            {
               if(nums[start] - nums[start+1] !== diff)
               {
                   return false;
               }
               else
               {
                   start++;
               }
            }
            return true;
        }
    }
};

//Super simple solution
var numberOfArithmeticSlices = function(A) {
    let count = 0, total = 0;
    
    for(let i=2;i<A.length;i++)
    {
        if(A[i]-A[i-1] == A[i-1]-A[i-2])
        {
            count++;
            total += count;
        }
        else
        {
            count = 0;
        }
    }
    return total;
};