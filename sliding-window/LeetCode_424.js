/**https://leetcode.com/problems/longest-repeating-character-replacement/
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

let max = function (arr) {
    let val = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > val) {
            val = arr[i];
        }
    }
    return val;
};

var characterReplacement = function (s, k) {
    let freq = new Array(26).fill(0);
    let left = 0;
    let right = 0;
    let result = Number.MIN_SAFE_INTEGER;

    while (right < s.length) {
        freq[s.charAt(right).charCodeAt(0) - 65] += 1;
        let maxCount = max(freq);
        let len = right - left + 1;
        let diff = len - maxCount;

        while (diff > k) {
            freq[s.charAt(left).charCodeAt(0) - 65] -= 1;
            maxCount = max(freq);
            left++;
            len = right - left + 1;
            diff = len - maxCount;
        }
        result = Math.max(result, len);
        right++;
    }
    return result;
};
