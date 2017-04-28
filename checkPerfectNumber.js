/**
We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.
Example:
Input: 28
Output: True
Explanation: 28 = 1 + 2 + 4 + 7 + 14
Note: The input number n will not exceed 100,000,000. (1e8)
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
   
    if(num === 1 || num <= 0) return false;
    var new_num = 0;
    var divisor_low = 1;
    var divisor_high = ~~(num/divisor_low);
    while(divisor_low <= divisor_high)
    {
        if(num%divisor_low === 0)
        {
            
            new_num += divisor_low;
            if(divisor_high !== num)
            {
                new_num += divisor_high;
            }
            divisor_low++;
            
        }
        else
        {
            divisor_low++;
        }
        divisor_high = ~~(num/divisor_low);
    }
    //console.log(new_num);
    return new_num === num;
};