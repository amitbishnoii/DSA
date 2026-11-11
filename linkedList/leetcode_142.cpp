//https://leetcode.com/problems/linked-list-cycle-ii/
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x) {}
};
class Solution {
public:
    ListNode* detectCycle(ListNode* head) {
        ListNode* slow = head;
        ListNode* fast = head;
        bool isCycle = false;

        while (fast != nullptr && fast->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;

            if (slow == fast) {
                isCycle = true;
                break;
            }
        }

        if (!isCycle)
            return nullptr;

        ListNode* start = head;
        while (start != fast) {
            start = start->next;
            fast = fast->next;
        }
        return start;
    }
};