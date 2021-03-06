/**
Given an integer, write an algorithm to convert it to hexadecimal. For negative integer, two’s complement method is used.

Note:

All letters in hexadecimal (a-f) must be in lowercase.
The hexadecimal string must not contain extra leading 0s. If the number is zero, it is represented by a single zero character '0'; otherwise, the first character in the hexadecimal string will not be the zero character.
The given number is guaranteed to fit within the range of a 32-bit signed integer.
You must not use any method provided by the library which converts/formats the number to hex directly.
*/
/**

 * @param {number} num

 * @return {string}

 */

var toHex = function (num) {
	var hex = '';
	if (num === 0)
	{
		return "0";
	} else if (num > 0)
	{
		return helper(num);
	} else
	{
		num = -num;
		return helper(0xffffffff - num + 1);
	}

};

function helper(num)
{
	var map = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
	var result = '';
	while (num)
	{
		result = map[num % 16] + result;
		num = ~~(num / 16)
	}
	return result;
}

//solution 2

var toHex2 = function(num) {

    var map = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
	var result = '';
    if(num === 0)
    {
        return "0";
    }
    while(num !== 0)
    {
        result = map[(num & 15)] + result;
        num = num >>> 4;
    }
    return result;
};


