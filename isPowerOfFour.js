/**
Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example:
Given num = 16, return true. Given num = 5, return false.

Follow up: Could you solve it without loops/recursion?
*/
/**
 * @param {number} num
 * @return {boolean}
 */
//solution1 :loop
var isPowerOfFour = function(num) {
    if(num == 1)
    {
        return true;
    }
    else if(num <= 0)
    {
        return false;
    }
    while(num>4)
    {
        if(num % 4 !== 0)
        {
            return false;
        }
        num = num/4;
    }
    return num === 4;
};

//solution 2: bit operation
var isPowerOfFour = function(num) {
	//555:101010101010
    return num > 0 && (num&(num-1)) === 0 && (num&0x55555555) !==0;

};