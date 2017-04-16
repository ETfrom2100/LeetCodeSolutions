/**
You are given a string representing an attendance record for a student. The record only contains the following three characters:

'A' : Absent.
'L' : Late.
'P' : Present.
A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

You need to return whether the student could be rewarded according to his attendance record.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
   if(s.indexOf('A') !== s.lastIndexOf('A') || s.indexOf('LLL') != -1)
   {
       return false;
   }
   return true;
};