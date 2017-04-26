/**
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Returns: True
Example 2:

Input: 14
Returns: False
*/
/**
 * @param {number} num
 * @return {boolean}
 */
//solution 1
var isPerfectSquare = function(num) {
    
    var low = 1, high = num;
    while(low<=high)
    {
        var mid = (low + high) >>> 1;
        if(mid*mid === num)
            return true;
        else if(mid*mid < num)
        {
            low = mid + 1;
        }
        else{
            high = mid -1;
        }
    }
    return false;
    
    
}

//solution 2
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var start = 1;
    
    while(num > 0)
    {
        num -= start;
        start += 2;
    }
    return num === 0;
   
}