/*
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/
/**

 * @param {string} num1

 * @param {string} num2

 * @return {string}

 */

 //be careful: the integer may go out of safe bound

var addStrings = function(num1, num2) {

   var carry = 0;

   var result = [];

   for(i=0,j=0;i<num1.length || j<num2.length;i++,j++)

   {

       var a = (i<num1.length)? num1.charCodeAt(num1.length-1-i) - 48 : 0;

       var b = (j<num2.length)? num2.charCodeAt(num2.length-1-j) - 48 : 0;

       var res = a+b+carry;

       result.push(res%10);

       carry = Math.floor(res/10);

       

   }

   if(carry == 1)

   {

       result.push(carry);

   }

   return result.reverse().join("");

};



