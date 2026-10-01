/**https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
    let map = new Map();
    let result = 0;
    let low = 0;
    let runningSum = 0;

    for (let high = 0; high < nums.length; high++) {
        map.set(nums[high], (map.get(nums[high]) || 0) + 1);
        runningSum += nums[high];

        while (high - low + 1 > k) {
            map.set(nums[low], map.get(nums[low]) - 1);
            runningSum -= nums[low];
            if (map.get(nums[low]) === 0) map.delete(nums[low]);
            low++;
        }

        if (map.size === k) result = Math.max(result, runningSum);
    }

    return result;
};
