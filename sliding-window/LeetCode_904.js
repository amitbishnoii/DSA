/**https://leetcode.com/problems/fruit-into-baskets/
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let fruitMap = new Map();
    let left = 0;
    let right = 0;
    let result = Number.MIN_SAFE_INTEGER;

    while (right < fruits.length) {
        fruitMap.set(fruits[right], (fruitMap.get(fruits[right]) || 0) + 1);
        while (fruitMap.size > 2) {
            fruitMap.set(fruits[left], (fruitMap.get(fruits[left]) || 0) - 1);
            if (fruitMap.get(fruits[left]) === 0) {
                fruitMap.delete(fruits[left]);
            }
            left++;
        }
        result = Math.max(result, right - left + 1);
        right++;
    }
    return result;
};
