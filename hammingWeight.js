/**
Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).

For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.
*/
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var str = n.toString(2);
    var counter = 0;
    
    for(var i=0;i<str.length;i++)
    {
        if(str.charAt(i) == '1')
        {
            counter++;
        }
    }
    return counter;
};

//solution 2: bit shift
var hammingWeight = function(n) {
    
    var counter = 0;
    
   while(n!==0)
   {
       counter = counter + (n & 1);
       n = n >>> 1;
   }
    return counter;
};