/**https://leetcode.com/problems/frequency-of-the-most-frequent-element/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
    nums = nums.sort((a, b) => a - b);
    let runningSum = 0;
    let left = 0;
    let right = 0;
    let result = 0;

    while (right < nums.length) {
        let target = nums[right];
        runningSum += nums[right];
        let cost = target * (right - left + 1) - runningSum;

        while (cost > k) {
            runningSum -= nums[left];
            left++;
            cost = target * (right - left + 1) - runningSum;
        }

        result = Math.max(result, right - left + 1);
        right++;
    }

    return result;
};
