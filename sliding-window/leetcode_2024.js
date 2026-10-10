/**https://leetcode.com/problems/maximize-the-confusion-of-an-exam/
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
    let left = 0;
    let right = 0;
    let result = 0;
    let freq = new Array(2).fill(0);
    let max = () => {
        if (freq[0] > freq[1]) {
            return freq[0];
        }
        return freq[1];
    };

    while (right < answerKey.length) {
        if (answerKey.charAt(right) === "T") {
            freq[0]++;
        } else {
            freq[1]++;
        }

        let largestFreq = max();
        let replacements = right - left + 1 - largestFreq;

        while (replacements > k) {
            if (answerKey.charAt(left) === "T") {
                freq[0]--;
            } else {
                freq[1]--;
            }
            left++;
            largestFreq = max();
            replacements = right - left + 1 - largestFreq;
        }

        result = Math.max(result, right - left + 1);
        right++;
    }

    return result;
};
