/**https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 1) return 1;
    if (nums.length === 2) return 2;
    let i = 1;
    let j = 2;
    while (j < nums.length) {
        if (nums[j] === nums[j - 1]) {
            if (nums[j] === nums[i - 1]) {
                j++;
            } else {
                nums[i + 1] = nums[j];
                i++;
                j++;
            }
        } else {
            nums[i + 1] = nums[j];
            i++;
            j++;
        }
    }
    return i + 1;
};
