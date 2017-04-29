/**
Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

For example,
Given "egg", "add", return true.

Given "foo", "bar", return false.

Given "paper", "title", return true.
*/
//solution 1 : using two maps
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var map1 = [];
    var map2 = [];
    
    for(var i=0;i<s.length;i++)
    {
        if(map1[s.charAt(i)] === undefined)
        {
            map1[s.charAt(i)] = t.charAt(i);
        }
        else if(map1[s.charAt(i)] !== t.charAt(i))
        {
            return false;
        }
        if(map2[t.charAt(i)] === undefined)
        {
            map2[t.charAt(i)] = s.charAt(i);
        }
        else if(map2[t.charAt(i)] !== s.charAt(i))
        {
            return false;
        }
    }
    return true;
};

//solution 2: using one map
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var map = [];
    for(var i=0;i<s.length;i++)
    {
        if(map[s.charAt(i)] === undefined)
        {
            if(Object.values(map).indexOf(t.charAt(i))=== -1)
                map[s.charAt(i)] = t.charAt(i);
            else
                return false;
        }
        else if(map[s.charAt(i)] !== t.charAt(i))
        {
            return false;
        }
    }
    return true;
};