/**
Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
*/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = {};
    let res = '';
    let counts = [];
    if(s===null) return '';
    for(let i=0;i<s.length;i++)
    {
        map[s.charAt(i)] = ~~map[s.charAt(i)]+1;
    }
    for(let key in map)
    {
        let count = map[key];
        if(counts[count] === undefined)
        {
            counts[count] = [];
        }
        counts[count].push(key);
    }
    for(let i=counts.length-1;i>=1;i--)
    {
        if(counts[i] !== undefined)
        {
            for(let m=0;m<counts[i].length;m++)
            {
                for(let j=0;j<i;j++)
                {
                        res += counts[i][m];
                }
            }
            
        }
    }
    return res;
};