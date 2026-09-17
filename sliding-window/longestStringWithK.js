/**https://www.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1
 * @param {string} s
 * @param {number} k
 * @return s {number}
 */
class Solution {
    longestKSubstr(s, k) {
        // code here
        let charMap = new Map();
        let left = 0;
        let right = 0;
        let result = -1;

        while (right < s.length) {
            charMap.set(
                s.charAt(right),
                (charMap.get(s.charAt(right)) || 0) + 1,
            );

            while (charMap.size > k) {
                charMap.set(s.charAt(left), charMap.get(s.charAt(left)) - 1);
                if (charMap.get(s.charAt(left)) === 0) {
                    charMap.delete(s.charAt(left));
                }
                left++;
            }
            if (charMap.size === k) {
                result = Math.max(result, right - left + 1);
            }
            right++;
        }

        return result;
    }
}
