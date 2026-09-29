/**https://leetcode.com/problems/contains-duplicate-ii/
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let numSet = new Set();
    let low = 0;
    let high = k;

    if (k > nums.length) {
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && numSet.has(nums[i])) {
                return true;
            } else {
                numSet.add(nums[i]);
            }
        }
        return false;
    }

    for (let i = 0; i <= k; i++) {
        if (i > 0 && numSet.has(nums[i])) {
            return true;
        } else {
            numSet.add(nums[i]);
        }
    }

    while (high < nums.length) {
        numSet.delete(nums[low]);
        low++;
        high++;
        if (high === nums.length) break;
        if (numSet.has(nums[high])) return true;
        numSet.add(nums[high]);
    }

    return false;
};
