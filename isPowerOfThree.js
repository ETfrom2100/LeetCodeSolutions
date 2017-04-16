/**
Given an integer, write a function to determine if it is a power of three.

Follow up:
Could you do it without using any loop / recursion?
*/
/**
 * @param {number} n
 * @return {boolean}
 */
//without loop
var isPowerOfThree = function(n) {

    var max_exponent = Math.floor(Math.log(Math.pow(2,31)-1) / Math.log(3));

    return n > 0 && Math.pow(3, max_exponent) % n === 0;

};


//with loop
var isPowerOfThree = function(n) {
    if(n > 1)
    {
        while(n%3 === 0)
        {
            n /= 3;
        }
    }
    return n==1;
};