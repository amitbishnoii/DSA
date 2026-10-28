/**https://leetcode.com/problems/binary-subarrays-with-sum/
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */

let findSubArrays = (nums, goal) => {
    let right = 0;
    let left = 0;
    let runningSum = 0;
    let result = 0;

    if (goal < 0) return 0;

    while (right < nums.length) {
        runningSum += nums[right];

        while (runningSum > goal) {
            runningSum -= nums[left];
            left++;
        }
        result += (right - left) + 1
        right++;
    }

    return result;
}

var numSubarraysWithSum = function (nums, goal) {
    return findSubArrays(nums, goal) - findSubArrays(nums, goal - 1);
};