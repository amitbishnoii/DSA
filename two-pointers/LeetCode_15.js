var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b);
    let result = [];
    for (let x = 0; x < nums.length; x++) {
        if (x > 0 && nums[x] === nums[x - 1]) {
            continue;
        }
        let i = x + 1;
        let j = nums.length - 1;
        while (i < j) {
            if (nums[x] + nums[i] + nums[j] === 0 && x !== i && x !== j) {
                result.push([nums[x], nums[i], nums[j]]);
                while (i < j && nums[i] === nums[i + 1]) {
                    i++;
                }

                while (i < j && nums[j] === nums[j - 1]) {
                    j--;
                }
                i++;
                j--;
            } else if (nums[x] + nums[i] + nums[j] > 0) {
                j--;
            } else {
                i++;
            }
        }
    }
    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
