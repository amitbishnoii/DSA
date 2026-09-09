/**https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 1) return 1;
    let i = 1;
    let j = 1;
    while (j < nums.length) {
        if (nums[j] !== nums[j - 1]) {
            nums[i] = nums[j];
            i++;
            j++;
        } else {
            j++;
        }
    }
    return i;
};
