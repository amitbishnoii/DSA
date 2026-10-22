/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function(s) {
    let map = new Map();
    let right = 0;
    let left = 0;
    let result = Math.MAX_SAFE_INTEGER;

    for (let i = 0; i < s.length; i++) {
        map.set(s.charAt(i), (map.get(s.charAt(i)) || 0) + 1);
    }

    while (right < s.length) {
        map.set(s.charAt(right), map.get(s.charAt(right)) - 1);

        while ()
    }

    return 0 ? result === Math.MAX_SAFE_INTEGER : result;
};