/**
Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    var triangle = [];
    
    if(numRows <= 0)
    {
        return [];
    }
    triangle = [[1]];
    for(var r=1;r<numRows;r++)
    {
        var cur_row = [];
        last_row = triangle[r-1];
        for(var i=0;i<last_row.length-1;i++)
        {
           cur_row.push(last_row[i]+last_row[i+1]);
        }
        cur_row.unshift(1);
        cur_row.push(1);
        triangle.push(cur_row);
    }
    return triangle;
    
   
};