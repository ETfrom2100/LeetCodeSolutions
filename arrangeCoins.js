/**
ou have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

Given n, find the total number of full staircase rows that can be formed.

n is a non-negative integer and fits within the range of a 32-bit signed integer.

Example 1:

n = 5

The coins can form the following rows:
¤
¤ ¤
¤ ¤

Because the 3rd row is incomplete, we return 2.
Example 2:

n = 8

The coins can form the following rows:
¤
¤ ¤
¤ ¤ ¤
¤ ¤

Because the 4th row is incomplete, we return 3.
*/

var arrangeCoins = function(n) {
    if(n===0) return 0;
    var k = 1;
    while(n > 0)
    {
        n = n - k;
        if(n-k-1 >= 0)
        {
            k++;
        }
        else
        {
            break;
        }
    }
    return k;
};

//solution 2
var arrangeCoins = function(n) {
    var start = 0;
    var end = n;
    var mid = 0;
    while(start <= end)
    {
        mid = (start+end)>>>1;
        if(0.5*mid*mid + 0.5*mid <= n)
        {
            start = mid + 1;
        }
        else
        {
            end = mid - 1;
        }
    }
    return start-1;
};