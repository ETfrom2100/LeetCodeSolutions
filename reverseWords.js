/**
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not be any extra space in the string.
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var words = s.split(' ');
    var reversed = [];
    
    for(var i=0;i<words.length;i++)
    {
        reversed.push(Array.from(words[i]).reverse().join(''));
    }
    return reversed.join(" ");
};

//solution 2: reverse the word when encountering a space " "
var reverseWords2 = function(s) {
    var chars = Array.from(s);
    var m = 0;
    for(var i=0;i<chars.length;i++)
    {
        if(chars[i] == ' ')
        {
            reverse(chars,m,i-1);
            m = i+1;
        }
    }
    reverse(chars,m,chars.length-1);
    return chars.join("");
    function reverse(arr,start,end)
    {
        
        while(start < end)
        {
            var temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
};