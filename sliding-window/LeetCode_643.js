/**https://leetcode.com/problems/maximum-average-subarray-i/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    if (nums.length === 1) return nums[0];
    let average = Number.MIN_SAFE_INTEGER;
    let currentSum = 0;
    let left = 0;
    let right = k;

    for (let i = 0; i < right; i++) {
        currentSum += nums[i];
    }

    average = Math.max(currentSum / k, average);

    while (right < nums.length) {
        currentSum += nums[right];
        currentSum -= nums[left];
        right += 1;
        left += 1;
        average = Math.max(currentSum / k, average);
    }

    return average;
};
