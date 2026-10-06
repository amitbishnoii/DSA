/**https://leetcode.com/problems/maximum-erasure-value/
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
    let numsMap = new Map();
    let result = 0;
    let left = 0;
    let right = 0;
    let runningSum = 0;

    while (right < nums.length) {
        numsMap.set(nums[right], (numsMap.get(nums[right]) || 0) + 1);
        runningSum += nums[right];

        while (numsMap.size < right - left + 1) {
            numsMap.set(nums[left], numsMap.get(nums[left]) - 1);
            runningSum -= nums[left];
            if (numsMap.get(nums[left]) === 0) numsMap.delete(nums[left]);
            left++;
        }

        result = Math.max(runningSum, result);
        right++;
    }

    return result;
};
