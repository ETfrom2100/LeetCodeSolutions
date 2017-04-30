/**
Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
//can't sum two numbers and then convert them back to string due to the possibility of integer overflow 
var addBinary = function(a, b) {
    var i=a.length-1;
    var j=b.length-1;
    var res = '';
    var carry = 0;
    while(i>=0 && j>=0)
    {
        res = (parseInt(a.charAt(i)) ^ parseInt(b.charAt(j)) ^ carry).toString() + res;
        carry = ~~((parseInt(a.charAt(i)) + parseInt(b.charAt(j)) + carry)/2);
        i--;
        j--;
    }
    while(i>=0)
    {
        res = (parseInt(a.charAt(i))^carry).toString() + res;
        carry = parseInt(a.charAt(i)) & carry;
        i--;
    }
    while(j>=0)
    {
        res = (parseInt(b.charAt(j))^carry).toString() + res;
        carry = parseInt(b.charAt(j)) & carry;
        j--;
    }
    if(carry)
    {
        res = "1"+res;
    }
    
    return res;
    
};