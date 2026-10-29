/**https://leetcode.com/problems/subarrays-with-k-different-integers/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

let atmostKDifferent = (arr, target) => {
    let right = 0;
    let left = 0;
    let result = 0;
    let map = new Map();

    while (right < arr.length) {
        map.set(arr[right], (map.get(arr[right]) || 0) + 1);

        while (map.size > target) {
            map.set(arr[left], map.get(arr[left]) - 1);
            if (map.get(arr[left]) === 0) map.delete(arr[left]);
            left++;
        }

        result += (right - left) + 1;
        right++;
    }

    return result;
}

var subarraysWithKDistinct = function (nums, k) {
    return atmostKDifferent(nums, k) - atmostKDifferent(nums, k - 1);
};