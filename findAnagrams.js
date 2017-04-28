/**
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

*/
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    var p_len = p.length;
    var s_len = s.length;
    var res = [];
    if(p_len > s_len) return [];
    var map = [];
    var map2 = [];
    for(var j=0;j<p_len;j++)
    {
        map[p.charAt(j)] = (~~map[p.charAt(j)])+1;
    }
   
    for(var i=0;i<s_len;i++)
    {
        map2[s.charAt(i)] = (~~map2[s.charAt(i)])+1;
        if(i>=p_len)
        {
            map2[s.charAt(i-p_len)] = ~~map2[s.charAt(i-p_len)] -1;
        }
        if(i+1>=p_len && checkAnagram())
        {
            res.push(i-p_len+1);
        }
       
            
    }
    return res;
    function checkAnagram()
    {
        for(var key in map)
        {
            if(map[key] !== ~~map2[key])
                return false;
        }
        return true;
    }
};