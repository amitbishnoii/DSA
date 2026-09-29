/**https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
    let low = 0;
    let high = k - 1;
    let runningSum = 0;
    let result = 0;

    for (let i = 0; i < k; i++) {
        runningSum += arr[i];
    }

    if (runningSum / k >= threshold) {
        result += 1;
    }

    while (high < arr.length) {
        runningSum -= arr[low];
        low++;
        high++;
        if (high === arr.length) break;
        runningSum += arr[high];

        if (runningSum / k >= threshold) {
            result += 1;
        }
    }

    return result;
};
