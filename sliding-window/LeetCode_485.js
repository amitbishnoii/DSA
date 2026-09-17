/** not a sliding window question
 *https://leetcode.com/problems/max-consecutive-ones/
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let count = 0;
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count += 1;
            if (count > result) {
                result = count;
            }
        } else {
            count = 0;
        }
    }

    return result;
};
