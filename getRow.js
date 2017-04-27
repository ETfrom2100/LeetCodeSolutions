/**
Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

Note:
Could you optimize your algorithm to use only O(k) extra space?
*/
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1];
    var lastRow = getRow(rowIndex-1);
    var curRow = [1];
    for(var i=0;i<lastRow.length-1;i++)
    {
        curRow.push(lastRow[i]+lastRow[i+1]);
    }
    curRow.push(1);
    return curRow;
};

//only use O(k) extra space
var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1];
    var lastRow = getRow(rowIndex-1);
    for(var i=0;i<rowIndex-1;i++)
    {
        lastRow[i] = lastRow[i]+lastRow[i+1];
    }
    lastRow.unshift(1);
    return lastRow;
};