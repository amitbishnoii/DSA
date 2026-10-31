/**https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    let left = 0;
    let right = 0;
    let runningCounter = 0;
    let result = 0;

    while (right < nums.length) {
        if (nums[right] === max) {
            runningCounter += 1;
        }

        while (runningCounter >= k) {
            if (nums[left] === max) {
                runningCounter--;
            }
            left++;
        }
        result += left;
        right++;
    }
    return result;
};