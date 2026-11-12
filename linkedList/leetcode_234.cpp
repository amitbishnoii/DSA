/**https://leetcode.com/problems/palindrome-linked-list/
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
    bool isPalindrome(ListNode* head) {
        ListNode *slow = head;
        ListNode *fast = head;
        ListNode *prev = nullptr;
        ListNode *pCheck = head;

        while (fast != nullptr && fast->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
        }

        while (slow != nullptr) {
            ListNode *nextNode = slow->next;
            slow->next = prev;
            prev = slow;
            slow = nextNode;
        }

        while (prev != nullptr) {
            if (prev->val != pCheck->val) {
                return false;
            }
            prev = prev->next;
            pCheck = pCheck->next;
        }

        return true;
    }
};