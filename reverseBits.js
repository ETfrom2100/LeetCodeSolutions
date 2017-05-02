/**
Reverse bits of a given 32 bits unsigned integer.

For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).

Follow up:
If this function is called many times, how would you optimize it?
*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var bits_str = n.toString(2);

    var full_str = bits_str;
    for(var i=0;i<(32-bits_str.length);i++)
    {
        full_str = "0"+full_str;
        
    }
    var reversed_str = full_str.split('').reverse().join('');
    return parseInt(reversed_str,2);
};
//solution 2
var reverseBits = function(n) {
    if(n == 0) return 0;
    
    var list = [];

    for(var i = 0 ; i < 32 ; i++){
        if(n > 0){
            //bits are automatically reversed when being pushed into an array
            list.push(parseInt(n%2));
            n = parseInt(n/2);
        } else {
            list.push(0);
        }
    }

    return parseInt(list.join(""),2);
};