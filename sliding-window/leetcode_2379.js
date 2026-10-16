/**https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
    let result = Number.MAX_SAFE_INTEGER;
    let left = 0;
    let right = 0;
    let operations = 0;

    for (right = 0; right < k; right++) {
        if (blocks.charAt(right) === "B") {
            continue;
        } else {
            operations += 1;
        }
    }

    result = Math.min(result, operations);

    while (right < blocks.length) {
        if (blocks.charAt(right) === "W") {
            operations += 1;
        }
        right++;
        if (blocks.charAt(left) === "W") {
            operations -= 1;
        }
        left++;
        result = Math.min(result, operations);
    }

    return result;
};
