/**https://leetcode.com/problems/rearrange-array-elements-by-sign/
 * not a sliding window question its a two pointers
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let result = new Array(nums.length).fill(0);
    let writeEven = 0;
    let writeOdd = 1;

    for (let k = 0; k < nums.length; k++) {
        if (nums[k] > 0) {
            result[writeEven] = nums[k];
            writeEven += 2;
        } else {
            result[writeOdd] = nums[k];
            writeOdd += 2;
        }
    }

    return result;
};
