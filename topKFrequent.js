/**
Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note: 
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {};
    let res= [];
    let frequencies = [];
    for(let i=0;i<nums.length;i++)
    {
        map[nums[i]] = ~~map[nums[i]]+1;
        
    }
    
    for(let key in map)
    {
        let frequency = map[key];
        if(frequencies[frequency] === undefined)
            frequencies[frequency] = [];
        frequencies[frequency].push(parseInt(key));
            
    }
    for(let j=frequencies.length-1;j>=0 && res.length<k;j--)
    {
        while(frequencies[j]!== undefined && frequencies[j].length>0)
        {
            res.push(frequencies[j].shift());
        }
    }
    return res;
};