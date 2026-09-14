/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// O(n) space and linear time
var rotateBruteForce = function (nums, k) {
    let result = [];

    let index = nums.length - k;

    for (let i = index; i < nums.length; i++) {
        result.push(nums[i]);
    }
    for (let i = 0; i < index; i++) {
        result.push(nums[i]);
    }

    ind = 0;
    result.forEach((val) => {
        nums[ind] = val;
        ind += 1;
    });
    return nums;
};

var rotateOptimized = (nums, k) => {
    if (nums.length === 1) return nums;

    k = k % nums.length;
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }
    i = 0;
    j = k - 1;
    while (i < j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }
    let n = nums.length - 1;
    while (k < n) {
        let temp = nums[k];
        nums[k] = nums[n];
        nums[n] = temp;
        k++;
        n--;
    }
};
