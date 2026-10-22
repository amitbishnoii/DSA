/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function (s) {
    let map = new Map();
    let right = 0;
    let left = 0;
    let result = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < s.length; i++) {
        map.set(s.charAt(i), (map.get(s.charAt(i)) || 0) + 1);
    }

    let valid = () => {
        for (const value of map.values()) {
            if (value > s.length / 4) {
                return false;
            }
        }
        return true;
    }

    while (right < s.length) {
        map.set(s.charAt(right), map.get(s.charAt(right)) - 1);

        while (valid()) {
            result = Math.min(result, (right - left) + 1);
            map.set(s.charAt(left), map.get(s.charAt(left)) + 1);
            left++;
        }

        right++;
    }

    return result === Math.MAX_SAFE_INTEGER ? 0 : result;
};