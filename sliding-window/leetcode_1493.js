/**https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let result = 0;
    let low = 0;
    let high = 0;
    let zeroes = 0;

    while (high < nums.length) {
        if (nums[high] === 0) {
            zeroes += 1;
        }

        while (zeroes > 1) {
            if (nums[low] === 0) {
                zeroes -= 1;
            }
            low++;
        }

        result = Math.max(result, high - low + 1);
        high++;
    }

    return result - 1;
};
