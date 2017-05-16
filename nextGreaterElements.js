/**
Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element. The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, output -1 for this number.

Example 1:
Input: [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2; 
The number 2 can't find next greater number; 
The second 1's next greater number needs to search circularly, which is also 2.

Note: The length of given array won't exceed 10000.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    
    let res=[];
    if(nums === null) return [];
    for(let i=0;i<nums.length;i++)
    {
        let numFound = false;
        for(let right=i+1;right<nums.length;right++)
        {
            if(nums[right]>nums[i])
            {
                res.push(nums[right]);
                numFound = true;
                break;
            }
        }
        if(!numFound)
        {
            for(let left=0;left<=i-1;left++)
            {
                if(nums[left]>nums[i])
                {
                    res.push(nums[left]);
                    numFound = true;
                    break;
                }
            }
            if(!numFound)
                res.push(-1);
        }
        
    }
    return res;
};

//solution 2: O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    
    let res=[];
    let stack = [];
    if(nums === null) return [];
    for(let i=0;i<nums.length;i++)
    {
        stack.push(i);
        
    }
    //console.log(stack);
    for(let j=nums.length-1;j>=0;j--)
    {
        res[j] = -1;
       
        while(stack.length>0 && nums[stack[0]] <= nums[j])
        {
            stack.shift();
        }
        
        if(stack.length > 0)
        {
            res[j] = nums[stack[0]];
        }
        
        stack.unshift(j);
    }
    return res;
};