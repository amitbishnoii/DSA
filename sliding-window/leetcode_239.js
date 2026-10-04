/**https://leetcode.com/problems/sliding-window-maximum/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let result = [];
    let helper = [];
    let left = 0;
    let right = 0;

    for (right = 0; right < k; right++) {
        if (right === 0) {
            helper.push(right);
        } else {
            while (
                helper.length !== 0 &&
                nums[helper[helper.length - 1]] < nums[right]
            ) {
                helper.pop();
            }
            helper.push(right);
        }
    }

    result.push(nums[helper[0]]);

    while (right < nums.length) {
        if (helper[0] === left) {
            helper.shift();
        }
        left++;
        while (nums[helper[helper.length - 1]] < nums[right]) {
            helper.pop();
        }
        helper.push(right);
        result.push(nums[helper[0]]);
        right++;
    }

    return result;
};
