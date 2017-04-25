/**
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".

Note:
The vowels does not include the letter "y".
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var pattern = new RegExp('^[aeiou]$','i');
    var vowels = [];
    
    var new_string = '';
    for(var i=0;i<s.length;i++)
    {
        var curChar = s.charAt(i);
        
        if(pattern.test(curChar))
        {
            
            vowels.push(curChar);
            
        }
    }
   
    var reversedVowels = vowels.reverse();
    
    for(var j=0;j<s.length;j++)
    {
        var curChar = s.charAt(j);
        if(pattern.test(curChar))
        {
            new_string += reversedVowels.splice(0,1);
        }
        else
        {
            new_string += curChar;
        }
    }
    return new_string;
    
};