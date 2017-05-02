/**
Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...

Note:
n is positive and will fit within the range of a 32-bit signed integer (n < 231).

Example 1:

Input:
3

Output:
3
Example 2:

Input:
11

Output:
0

Explanation:
The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.
*/
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    var start = 1;
    var len = 1;
    var base = 9;
    if(n<=9) return n;
    
    while(n>len*base)
    {
        n = n-len*base;
        base*=10;
        start*=10;
        len++;
    }
    var real_number = start + (n-1)/len;
    return parseInt(real_number.toString().charAt((n-1)%len));
};