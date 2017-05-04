/**
Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Subscribe to see which companies asked this question.
*/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length > haystack.length || haystack === null || needle === null) return -1;
    
    for(var i=0;i<haystack.length-needle.length+1;i++)
    {
        var temp_str = haystack.substr(i,needle.length);
        if(temp_str === needle) return i;
    }
    return -1;
};