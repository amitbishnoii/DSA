/**
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
    ListNode* removeElements(ListNode* head, int val) {

        if (head == nullptr)
            return head;

        while (head->val == val) {
            head = head->next;
            if (head == nullptr) {
                return head;
            }
        }

        ListNode* dummy = new ListNode(0, head);
        ListNode* slow = dummy;
        ListNode* fast = head;

        while (fast != nullptr) {
            while (fast->val == val) {
                slow->next = fast->next;
                fast = fast->next;
                if (fast == nullptr) return dummy->next;
            }
            slow = fast;
            fast = fast->next;
        }

        return dummy->next;
    }
};