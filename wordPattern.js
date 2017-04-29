/**
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
*/
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var str_arr = str.split(' ');
    var map =[];
    
    if(str_arr.length !== pattern.length)
    {
        return false;
    }
    for(var i=0;i<pattern.length;i++)
    {
        if(map[pattern.charAt(i)] === undefined)
        {
            if(Object.values(map).indexOf(str_arr[i]) === -1)
                map[pattern.charAt(i)] = str_arr[i];
            else
                return false;
          
        }
        else if(map[pattern.charAt(i)] !== str_arr[i])
        {
            
            return false;
        }
    }
    return true;
};

//using two maps
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var str_arr = str.split(' ');
    var map1 =[];
    var map2 = [];
    if(str_arr.length !== pattern.length)
    {
        return false;
    }
    for(var i=0;i<pattern.length;i++)
    {
        if(map1[pattern.charAt(i)] === undefined)
            map1[pattern.charAt(i)] = str_arr[i];
        else if(map1[pattern.charAt(i)] !== str_arr[i])
            return false;
        
        if(map2[str_arr[i]] === undefined)
            map2[str_arr[i]] = pattern.charAt(i);
        else if(map2[str_arr[i]] !== pattern.charAt(i))
            return false;
            
    }
    return true;
};