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



