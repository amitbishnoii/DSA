/**https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let count = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            count += 1;
        }
        if (i === nums.length - 1 && nums[0] < nums[i]) {
            count += 1;
        }
    }
    if (count > 1) {
        return false;
    }
    return true;
};
