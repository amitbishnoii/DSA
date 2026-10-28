/**https://leetcode.com/problems/count-number-of-nice-subarrays/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

let odd = (nums, target) => {
    let right = 0;
    let left = 0;
    let result = 0;
    let runningCount = 0;

    while (right < nums.length) {
        if (nums[right] % 2 !== 0) {
            runningCount += 1;
        }

        while (runningCount > target) {
            if (nums[left] % 2 !== 0) {
                runningCount -= 1;
            }
            left++;
        }

        result += (right - left) + 1;
        right++;
    }

    return result;
}

var numberOfSubarrays = function (nums, k) {
    return odd(nums, k) - odd(nums, k - 1);
};