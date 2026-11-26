/**
 * Definition for singly-linked list.
 */
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {
    }
    ListNode(int x) : val(x), next(nullptr) {
    }
    ListNode(int x, ListNode *next) : val(x), next(next) {
    }
};

class Solution {
  public:
    ListNode *deleteDuplicates(ListNode *head) {
        ListNode *dummy = new ListNode(0, head);
        ListNode *prev = dummy;
        ListNode *slow = nullptr;
        ListNode *fast = head;

        if (head == nullptr)
            return head;

        while (fast != nullptr) {
            while (fast->next != nullptr && fast->val == fast->next->val) {
                slow = fast;
                fast = fast->next;
            }

            if (slow == nullptr || fast->val != slow->val) {
                prev->next = fast;
                prev = fast;
            }
            slow = fast;
            fast = fast->next;
        }

        prev->next = nullptr;

        return dummy->next;
    }
};