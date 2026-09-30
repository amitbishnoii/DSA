/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
    let result = 0;
    let low = 0;
    let high = 0;
    let runningSum = 0;

    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] === 0) {
            runningSum += customers[i];
        }
    }

    for (high = 0; high < minutes; high++) {
        if (grumpy[high] === 1) {
            runningSum += customers[high];
        }
    }

    result = Math.max(result, runningSum);

    while (high < customers.length) {
        if (grumpy[low] === 1) {
            runningSum -= customers[low];
        }
        low++;
        if (grumpy[high] === 1) {
            runningSum += customers[high];
        }
        high++;

        result = Math.max(result, runningSum);
    }

    return result;
};
