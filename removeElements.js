/**
Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var cur_node = head;
    var fakehead = new ListNode(-1);
    fakehead.next = head;
    var prev = fakehead;
    while(cur_node!==null )
    {
        if(cur_node.val === val)
        {
            
            prev.next = cur_node.next;
        }
        else
        {
            prev = prev.next;
        }
       
        cur_node = cur_node.next;
    }
    return fakehead.next;
};