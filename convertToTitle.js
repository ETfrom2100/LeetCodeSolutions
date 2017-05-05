/**
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
*/

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    
   var result = "";

    while(n > 0){
        var codeNum = (n-1)%26;
        var c = String.fromCharCode(codeNum+65);
        result = c + result;

        n = parseInt((n-1) / 26);
    }
    return  result;
};