/**https://leetcode.com/problems/get-equal-substrings-within-budget/
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
    let runningCost = 0;
    let left = 0;
    let right = 0;
    let result = 0;

    while (right < s.length) {
        runningCost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));

        while (runningCost > maxCost) {
            runningCost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
            left++;
        }

        result = Math.max(result, right - left + 1);
        right++;
    }

    return result;
};
