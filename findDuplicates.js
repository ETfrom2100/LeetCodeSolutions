/**
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let res = [];
    for(let i=0;i<nums.length;i++)
    {
      
            while(nums[nums[i]-1] !== nums[i])
            {
                let temp = nums[nums[i]-1];
                nums[nums[i]-1] = nums[i];
                nums[i] = temp;
            }
        
    }
    for(let m=0;m<nums.length;m++)
    {
        if(nums[m] !== m+1)
        {
            res.push(nums[m]);
        }
    }
    return res;
};

//solution 2:  when find a number i, flip the number at position i-1 to negative. if the number at position i-1 is already negative, i is the number that occurs twice.
var findDuplicates = function(nums) {
	let res=[];
    for(let i=0;i<nums.length;i++)
    {
      
        let idx = Math.abs(nums[i]) -1;
        if(nums[idx] < 0)
            res.push(Math.abs(idx+1));
        nums[idx] = -nums[idx];
        
    }
    return res;