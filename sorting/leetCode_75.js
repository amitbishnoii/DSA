/**https://leetcode.com/problems/sort-colors/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let j = i;
        while (j > 0 && nums[j - 1] > nums[j]) {
            let temp = nums[j - 1];
            nums[j - 1] = nums[j];
            nums[j] = temp;
            j--;
        }
    }
};