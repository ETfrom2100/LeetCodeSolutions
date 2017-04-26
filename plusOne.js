/**
Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.

Subscribe to see which companies asked this question.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var carry = false;
    for(var i=digits.length-1;i>=0;i--)
    {
        if(i==digits.length-1)
        {
            if(digits[i] + 1 === 10)
            {
            carry = true;
            digits[i]=0;
            }
            else
            {
                digits[i]++;
            }
        }
        else
        {
            if(carry)
            {
                if(digits[i] + 1 === 10)
                {
                    digits[i] = 0;
                }
                else
                {
                    digits[i]++;
                    carry = false;
                }
            }
        }
    }
    if(carry)
    {
        digits.unshift(1);
    }
    return digits;
};