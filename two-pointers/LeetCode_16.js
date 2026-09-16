/**https://leetcode.com/problems/3sum-closest/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums = nums.sort((a, b) => a - b);
    let result = 0;
    let difference = Number.MAX_SAFE_INTEGER;

    for (let x = 0; x < nums.length; x++) {
        let i = x + 1;
        let j = nums.length - 1;
        while (i < j) {
            let sum = nums[x] + nums[i] + nums[j];
            let current_diff = Math.abs(target - sum);

            if (sum === target) {
                return sum;
            } else if (sum < target) {
                if (current_diff < difference) {
                    difference = current_diff;
                    result = sum;
                }
                i++;
            } else {
                if (current_diff < difference) {
                    difference = current_diff;
                    result = sum;
                }
                j--;
            }
        }
    }

    return result;
};
