/**
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I'll tell you whether the number is higher or lower.

You call a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):

-1 : My number is lower
 1 : My number is higher
 0 : Congrats! You got it!
Example:
n = 10, I pick 6.

Return 6.
*/
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    
    
    return countHelper(n);
    function countHelper(n)
    {
        if(n===1) return "1";
        var prev = countHelper(n-1);
        var temp_num = prev[0];
        var temp_count = 0;
        var new_string = '';
        for(var i=0;i<prev.length;i++)
        {
           
            if(prev[i] === temp_num)
            {
                temp_count++;
                temp_num = prev[i];
            }
            else
            {
                new_string+= temp_count.toString()+temp_num;
                temp_count = 1;
                temp_num = prev[i];
            }
        }
        new_string+= temp_count.toString()+temp_num;
        return new_string;
    }
};