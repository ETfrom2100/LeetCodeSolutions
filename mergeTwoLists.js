/**
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var new_list = new ListNode(0);
    var c = new_list; //current node position
    
    while(l1 !== null && l2 !== null)
    {
        if(l1.val > l2.val)
        {
            c.next = l2;
            l2 = l2.next;
        }
        else
        {
            c.next = l1;
            l1 = l1.next;
        }
        c = c.next;
    }
    if(l1 !== null)
    {
        c.next = l1;
    }
    if(l2 !== null)
    {
        c.next = l2;
    }
    return new_list.next;
};

//solution 2: recursion
var mergeTwoLists2 = function(l1, l2) {
    if(l1 === null)
    {
        return l2;
    }
    else if(l2 === null)
    {
        return l1;
    }
    else
    {
        var new_list;
        if(l1.val > l2.val)
        {
            new_list = l2;
            new_list.next = mergeTwoLists(l2.next,l1);
        }
        else
        {
            new_list = l1;
            new_list.next = mergeTwoLists(l1.next,l2);
        }
        return new_list;
    }
};