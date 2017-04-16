/**
 * @param {number} n
 * @return {boolean}
 */

//solution 1 : Math derivation
//Because the range of an integer = -2147483648 (-2^31) ~ 2147483647 (2^31-1), the max possible power of two = 2^30 = 1073741824.
var isPowerOfTwo = function(n) {
    return n > 0 && Math.pow(2,30) % n === 0;
};

//solution 2 : bit operation
//Power of 2 means only one bit of n is '1'
var isPowerOfTwo = function(n) {

    return n > 0 && ((n & (n-1)) === 0);

};

//solution 3: iterative
var isPowerOfTwo = function(n) {
    if(n<=0)
    {
        return false;
    }
    while(n%2 === 0)
    {
        n /= 2;
    }
    return n == 1;
};