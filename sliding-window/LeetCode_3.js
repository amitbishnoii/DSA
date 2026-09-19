/**https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let charMap = new Map();
    let left = 0;
    let right = 0;
    let result = 0;

    if (s.length === 0) return 0;

    while (right < s.length) {
        charMap.set(s.charAt(right), (charMap.get(s.charAt(right)) || 0) + 1);

        while (charMap.get(s.charAt(right)) > 1) {
            charMap.set(s.charAt(left), charMap.get(s.charAt(left)) - 1);
            left++;
        }
        result = Math.max(result, right - left + 1);
        right++;
    }
    return result;
};
