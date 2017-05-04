/**
Implement int sqrt(int x).

Compute and return the square root of x.
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var start = 1;
    var max = x;
    if(x ===0) return 0;
    while(true){
        var mid =start + ~~((max-start)/2);
        
        if(mid > x/mid) 
            max = mid-1;
        else{
            if((mid+1) > x/(mid+1)) return mid;
            else
                start = mid + 1;
        }
    }
    
    
};