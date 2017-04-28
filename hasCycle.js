/**
Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?
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
var hasCycle = function(head) {
    if(head === null) return false;
    var turtle = head;
    var rabbit = head;
    while(rabbit.next !== null && rabbit.next.next !== null)
    {
       // if(head.next.next === head) return true;
        turtle = turtle.next;
        rabbit = rabbit.next.next;
        
        if(turtle === rabbit) return true;
       
    }
    return false;
};