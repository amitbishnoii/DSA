/**https://leetcode.com/problems/reorder-list/
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
    void reorderList(ListNode *head) {
        ListNode *fast = head;
        ListNode *middle = head;
        ListNode *tempHead = head; // temporary head used to merge
        ListNode *rHead = nullptr; // head of the reversed second half

        // step 1:
        // find the middle, detach it from the first half
        while (fast != nullptr && fast->next != nullptr) {
            middle = middle->next;
            fast = fast->next->next;
        }

        // step 2:
        // reverse the second half
        ListNode *second = middle->next; // second half starts AFTER the middle
        middle->next = nullptr;          // cut: first half ends at the middle

        while (second != nullptr) {
            ListNode *nextNode = second->next;
            second->next = rHead;
            rHead = second;
            second = nextNode;
        }

        // step 3:
        // merge two parts
        while (rHead != nullptr) {
            ListNode *nextHead = tempHead->next;
            tempHead->next = rHead;
            tempHead = nextHead; // move tempHead to the next node
            ListNode *nextRHead = rHead->next;
            rHead->next = tempHead;
            rHead = nextRHead; // move rHead to the next node
        }
    }
};