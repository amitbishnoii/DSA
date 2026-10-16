/**https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
    let result = Number.MAX_SAFE_INTEGER;
    let left = 0;
    let right = 0;
    let runningSum = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    if (sum < x) return -1;

    while (right < nums.length) {
        runningSum += nums[right];

        while (sum - runningSum < x) {
            runningSum -= nums[left];
            left++;
        }
        if (sum - runningSum === x) {
            let length = right - left + 1;
            result = Math.min(result, nums.length - length);
        }
        right++;
    }

    if (result === Number.MAX_SAFE_INTEGER) return -1;

    return result;
};
