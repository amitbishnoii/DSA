/**https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
    let right = 0;
    let left = 0;
    let smallDeq = [];
    let bigDeq = [];
    let bigStart = 0;
    let smallStart = 0;
    let result = Number.MIN_SAFE_INTEGER;

    while (right < nums.length) {
        while (smallDeq.length > smallStart && smallDeq[smallDeq.length - 1] > nums[right]) {
            smallDeq.pop();
        }
        smallDeq.push(nums[right]);

        while (bigDeq.length > bigStart && bigDeq[bigDeq.length - 1] < nums[right]) {
            bigDeq.pop();
        }
        bigDeq.push(nums[right]);

        while (Math.abs(bigDeq[bigStart] - smallDeq[smallStart]) > limit) {
            if (nums[left] === bigDeq[bigStart]) {
                bigStart++;
            } else if (nums[left] === smallDeq[smallStart]) {
                smallStart++;
            }
            left++;
        }

        if (Math.abs(bigDeq[bigStart] - smallDeq[smallStart]) <= limit) {
            result = Math.max(result, (right - left) + 1);
        }
        right++;
    }

    return result;
};