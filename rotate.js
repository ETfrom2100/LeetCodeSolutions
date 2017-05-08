/**
Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//solution 1
var rotate = function(nums, k) {
    
    var len = nums.length;
    
    for(var i=0;i<nums-k;i++)
    {
        var last_elem = nums[len-1];
        nums.pop();
        nums.unshift(last_elem);
    
    }
   
};

//solution 2
var rotate = function(nums, k) {
 var len = nums.length;
    k = k%len;
    nums.reverse();
    reverse_arr(nums,0,k-1);
    reverse_arr(nums,k,len-1);
    
    function reverse_arr(arr,start,end)
    {
        while(start < end)
        {
            var temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}