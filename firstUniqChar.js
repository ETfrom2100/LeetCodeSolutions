/**
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
   var map = [];
    for(var i=0;i<s.length;i++)
    {
        map[s.charAt(i)] = ~~map[s.charAt(i)]+1;
    }
    for(var c in map)
    {
        if(map[c] == 1)
        {
            return s.indexOf(c);
        }
    }
    return -1;
    
};
//solution 2
var firstUniqChar2 = function(s) {
	for(i=0;i<s.length;i++){
       if (s.indexOf(s[i])===s.lastIndexOf(s[i])){
          return i;
       } 
    }
    return -1;
};