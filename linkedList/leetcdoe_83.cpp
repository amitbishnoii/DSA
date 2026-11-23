/**https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 * Definition for singly-linked list.
 */
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        ListNode* slow = head;
        ListNode* fast = head;

        if (head == nullptr) return head;

        while (fast != nullptr) {
            if (fast->val == slow->val) {
                fast = fast->next;
            } else {
                slow->next = fast;
                slow = fast;
                fast = fast->next;
            }
        }

        slow->next = nullptr;

        return head;
    }
};