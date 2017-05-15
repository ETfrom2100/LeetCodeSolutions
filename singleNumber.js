/**
Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

For example:

Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

Note:
The order of the result is not important. So in the above example, [5, 3] is also correct.
Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let map = {};
    let res = [];
    if(nums === null) return [];
    for(let i=0;i<nums.length;i++)
    {
        map[nums[i]] = ~~map[nums[i]]+1;
    }
    for(let key in map)
    {
        if(map[key] == 1)
        {
            res.push(parseInt(key));
        }
    }
    return res;
};

//solution 2: constant space
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    
    let res = [0,0];
    let xor = 0;
    if(nums === null) return [];
    for(let i=0;i<nums.length;i++)
    {
       xor ^= nums[i];
       
    }
    xor &=-xor; //get the right most bit set
    for(let j=0;j<nums.length;j++)
    {
       if((nums[j] & xor) === 0)
        res[0] ^=nums[j];
       else
        res[1] ^=nums[j];
    }
    return res;
};