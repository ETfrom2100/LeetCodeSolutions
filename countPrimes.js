/**
Count the number of prime numbers less than a non-negative number, n.

*/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if(n<=1) return 0;
  var count = 0;
  var start = 2;
  var map = [];
  while(start<n)
  {
      if(map[start] === undefined)
      {
          count++;
          for(var i=2;start*i<n;i++)
          {
              map[start*i] = true;
          }
      }
      
      start++;
  }
  return count;
};