/**
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
Note:
You may assume that the array does not change.
There are many calls to sumRange function.
*/

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.map = [];
    for(var i=0;i<nums.length;i++)
    {
        if(i===0) 
            this.map[0] = nums[0];
        else
            this.map[i] = this.map[i-1] + nums[i];
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if(i>0)
    {
        return this.map[j] - this.map[i-1];
    }
    else
    {
        return this.map[j];
    }
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */