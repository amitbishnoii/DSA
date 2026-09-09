var sortedSquares = function (nums) {
    if (nums.length === 1) return nums.map((num) => num * num);
    let i = 0;
    let j = nums.length - 1;
    let result = [];

    while (i <= j) {
        if (Math.abs(nums[i]) > Math.abs(nums[j])) {
            result.unshift(nums[i] * nums[i]);
            i++;
        } else {
            result.unshift(nums[j] * nums[j]);
            j--;
        }
    }
    return result;
};
