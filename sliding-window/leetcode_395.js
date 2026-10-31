/**https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

let valid = (map, k) => {
    for (const i of map.values()) {
        if (i < k) {
            return false;
        }
    }
    return true;
}

var longestSubstring = function (s, k) {
    let result = 0;
    let passes = new Set(s).size;

    for (let u = 1; u <= passes; u++) {
        let right = 0;
        let left = 0;
        let map = new Map();

        while (right < s.length) {
            map.set(s.charAt(right), (map.get(s.charAt(right)) || 0) + 1);

            while (map.size > u) {
                map.set(s.charAt(left), map.get(s.charAt(left)) - 1);
                if (map.get(s.charAt(left)) === 0) map.delete(s.charAt(left));
                left++;
            }

            if (valid(map, k)) {
                result = Math.max(result, (right - left) + 1);
            }
            right++;
        }
    }

    return result;
};