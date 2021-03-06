/**
iven a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

Example 1:
Input: "abab"

Output: True

Explanation: It's the substring "ab" twice.
Example 2:
Input: "aba"

Output: False
Example 3:
Input: "abcabcabcabc"

Output: True

Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    
    if(s.length <= 1)
    {
        return false;
    }
    else
    {   var str,pattern;
        var substr_len = Math.floor(s.length/2);
        while(substr_len >=1)
        {
            if(s.length % substr_len === 0)
            {
                str = s.substr(0,substr_len);
                pattern = new RegExp(str,'g');
                if(s.replace(pattern,'') === '')
                {
                    return true;
                }
                else
                {
                    substr_len--;
                }
            }
            else
            {
                substr_len--;
            }
            
        }
        
        
    }
    
    
    
    return false;
};

//solution2: KMP algorithm
//http://jakeboxer.com/blog/2009/12/13/the-knuth-morris-pratt-algorithm-in-my-own-words/
var repeatedSubstringPattern2 = function(s) {
    
    var prefix = kmp(s);
    var len = prefix[s.length-1];
    var n = s.length;
    return len > 0 && n%(n-len)===0;
};

var kmp = function(str){
    var len = str.length;
    var dp = [];
    var i=0,j=1;
    dp[0]=0;
    while(j<str.length)
    {
        if(str.charAt(i) == str.charAt(j))
        {
            dp[j] = i+1;
            i++;
            j++;
        }
        else
        {
            if(i===0)
            {
                dp[j]=0;
                j++;
            }
            else
            {
                i=dp[i-1];
            }
        }
    }
    return dp;
}