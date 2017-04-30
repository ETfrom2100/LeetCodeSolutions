/**
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example, 
Given s = "Hello World",
return 5.
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s.trim() === '')
        return 0;
    else
    {
        var count = 0;
        s = s.trim();
        for(var i=s.length-1;i>=0;i--)
        {
            if(s.charAt(i) !== ' ')
                count++;
            else
                return count;
        }
        return count;
    }
};

//one line solution
var lengthOfLastWord = function(s) {

    return s.trim().length - s.trim().lastIndexOf(" ") -1 ;

};