/**
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Here are few examples.
[1,3,5,6], 5 → 2
[1,3,5,6], 2 → 1
[1,3,5,6], 7 → 4
[1,3,5,6], 0 → 0
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var idx = nums.indexOf(target);
    if(idx != -1)
    {
        return idx;
    }
    else
    {
        for(var i=0;i<nums.length;i++)
        {
            if(target<nums[i])
            {
                return i;
            }
        }
        return nums.length;//target is greater than all the elements 
    }
};