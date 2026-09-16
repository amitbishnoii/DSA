/**https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    maxSubarraySum(arr, k) {
        // code here
        let low = 0;
        let high = 0;
        let sum = 0;
        let result = 0;

        while (high < k) {
            sum += arr[high];
            high++;
        }

        result = Math.max(result, sum);

        while (high < arr.length) {
            sum += arr[high];
            sum -= arr[low];
            high++;
            low++;
            result = Math.max(result, sum);
        }

        return result;
    }
}
