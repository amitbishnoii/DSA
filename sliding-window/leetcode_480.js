/**https://leetcode.com/problems/sliding-window-median/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

let getIndex = (arr, target) => {
    let high = arr.length - 1;
    let low = 0;

    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        if (arr[mid] >= target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
}

var medianSlidingWindow = function (nums, k) {
    let medianWindow = [];
    let result = [];
    let left = 0;
    let right = 0;

    for (right = 0; right < k; right++) {
        medianWindow.push(nums[right]);
    }
    medianWindow.sort((a, b) => a - b);

    if (medianWindow.length % 2 === 0) {
        let middle = medianWindow.length / 2;
        result.push((medianWindow[middle-1] + medianWindow[middle]) / 2);
    } else {
        result.push(medianWindow[Math.floor(medianWindow.length / 2)]);
    }

    while (right < nums.length) {
        let leaveIndex = getIndex(medianWindow, nums[left]);
        medianWindow.splice(leaveIndex, 1);
        left++;
        let enterIndex = getIndex(medianWindow, nums[right]);
        medianWindow.splice(enterIndex, 0, nums[right]);
        right++;
        if (medianWindow.length % 2 === 0) {
            let middle = medianWindow.length / 2;
            result.push((medianWindow[middle - 1] + medianWindow[middle]) / 2);
        } else {
            result.push(medianWindow[Math.floor(medianWindow.length / 2)]);
        }
    }

    return result;
};