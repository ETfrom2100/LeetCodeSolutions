/**
Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
//solution 1: two loops ; time complexity min(O(n*k),O(n^2))
var containsNearbyDuplicate = function(nums, k) {
    
    for(var i=0;i<nums.length;i++)
    {
        for(var j=i+1;j<=Math.min(i+k,nums.length-1);j++)
        {
            if(nums[j] == nums[i])
            {
                return true;
            }
        }
    }
    return false;
};

//solution 2: using hashmap; time complecity O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
    var map = new Map();
    for(var i=0;i<nums.length;i++)
    {
        if(!map.has(nums[i]))
        {
            map.set(nums[i],i);
        }
        else
        {
            if(Math.abs(i-map.get(nums[i])) <= k)
            {
                return true;
            }
            else
            {
                map.set(nums[i],i);
            }
            
        }
    }
    return false;
};