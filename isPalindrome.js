/**
Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space?
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
//solution 1: O(n) time and O(1) space
var isPalindrome = function(head) {
    if(head === null) return true;
    var slow = head, fast= head;
    
    while(fast !==null && fast.next !== null)
    {
        slow = slow.next;
        fast = fast.next.next;
    }
    if(fast !== null)
    {
        //odd nodes
        slow = slow.next;
    }
    slow = reverse(slow);
    fast = head;
    while(slow !== null)
    {
        if(slow.val == fast.val)
        {
            slow = slow.next;
            fast = fast.next;
        }
        else
        {
            return false;
        }
    }
    return true;
    
    function reverse(cur_node)
    {
        var prev = null;
        while(cur_node !== null)
        {
        var next_node = cur_node.next;
        cur_node.next = prev;
        prev = cur_node;
        cur_node = next_node;
        }
        return prev;
    }
};

//solution 2: O(n) time and O(n) space
var isPalindrome = function(head) {
    if(head === null) return true;
    var map=[];
    var start = head;
    while(start !== null)
    {
        map.push(start.val);
        start = start.next;
    }
   
    return palindromeHelper(map);
    function palindromeHelper(arr)
    {
        if(arr.length ===1 || arr.length===0) return true;
        while(arr.length > 1)
        {
            if(arr[0]  === arr[arr.length-1])
            {
                arr.pop(arr[arr.length-1]);
                arr.shift(arr[0]);
                return palindromeHelper(arr);
            }
            else
                return false;
        }
        
    }
};