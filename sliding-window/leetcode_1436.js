/**https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let low = 0;
    let high = k - 1;
    let result = Number.MIN_SAFE_INTEGER;
    let runningCount = 0;

    for (let i = 0; i < k; i++) {
        if (
            s.charAt(i) === "a" ||
            s.charAt(i) === "e" ||
            s.charAt(i) === "i" ||
            s.charAt(i) === "o" ||
            s.charAt(i) === "u"
        ) {
            runningCount += 1;
        }
    }

    result = Math.max(runningCount, result);

    while (high < s.length) {
        if (
            s.charAt(low) === "a" ||
            s.charAt(low) === "e" ||
            s.charAt(low) === "i" ||
            s.charAt(low) === "o" ||
            s.charAt(low) === "u"
        ) {
            runningCount -= 1;
        }
        low++;
        high++;
        if (
            s.charAt(high) === "a" ||
            s.charAt(high) === "e" ||
            s.charAt(high) === "i" ||
            s.charAt(high) === "o" ||
            s.charAt(high) === "u"
        ) {
            runningCount += 1;
        }
        result = Math.max(runningCount, result);
    }

    return result;
};
