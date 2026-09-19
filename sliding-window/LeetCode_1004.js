/**https://leetcode.com/problems/max-consecutive-ones-iii/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let left = 0;
    let right = 0;
    let zeroes = 0;
    let result = Number.MIN_SAFE_INTEGER;

    while (right < nums.length) {
        if (nums[right] === 0) {
            zeroes += 1;
        }

        while (zeroes > k) {
            if (nums[left] === 0) zeroes -= 1;
            left++;
        }

        result = Math.max(result, right - left + 1);
        right++;
    }

    return result;
};
