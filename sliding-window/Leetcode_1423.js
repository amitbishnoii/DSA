/**https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
    let low = 0;
    let high = cardPoints.length - k - 1;
    let result = Number.MIN_SAFE_INTEGER;
    let totalSum = 0;
    let windowSum = 0;

    for (let i = 0; i < cardPoints.length; i++) {
        totalSum += cardPoints[i];
    }

    for (let i = 0; i <= high; i++) {
        windowSum += cardPoints[i];
    }

    result = Math.max(result, totalSum - windowSum);

    while (high < cardPoints.length) {
        windowSum -= cardPoints[low];
        low++;
        high++;
        if (high === cardPoints.length) break;
        windowSum += cardPoints[high];

        result = Math.max(result, totalSum - windowSum);
    }

    return result;
};
