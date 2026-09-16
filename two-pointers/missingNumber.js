/**https://www.geeksforgeeks.org/problems/missing-number-in-array1416/1
 * @param {number[]} arr
 * @return s {number}
 */
class Solution {
    missingNum(arr) {
        // code here
        let sum = ((arr.length + 1) * (arr.length + 2)) / 2;
        let sumOfElements = arr.reduce((acc, val) => acc + val, 0);
        return sum - sumOfElements;
    }
}
