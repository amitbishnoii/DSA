// https://www.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1

/**
 * @param {number} sum
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
    countTriplets(sum, arr) {
        // code here
        arr = arr.sort((a, b) => a - b);
        let result = 0;

        for (let x = 0; x < arr.length; x++) {
            let i = x + 1;
            let j = arr.length - 1;
            while (i < j) {
                if (arr[x] + arr[i] + arr[j] < sum) {
                    result += j - i;
                    i++;
                } else if (arr[x] + arr[i] + arr[j] >= sum) {
                    j--;
                }
            }
        }

        return result;
    }
}
