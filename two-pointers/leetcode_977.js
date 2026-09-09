var sortedSquares = function (nums) {
    if (nums.length === 1) return nums.map((num) => num * num);
    let i = 0;
    let j = nums.length - 1;
    let pos = nums.length - 1;
    let result = new Array(nums.length);

    while (i <= j) {
        if (Math.abs(nums[i]) > Math.abs(nums[j])) {
            result[pos] = nums[i] * nums[i];
            pos--;
            i++;
        } else {
            result[pos] = nums[j] * nums[j];
            pos--;
            j--;
        }
    }
    return result;
};
