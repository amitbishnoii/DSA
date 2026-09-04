/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (n) {
    if (n < 0) return false;
    let temp = n;
    let rev = 0;

    while (n !== 0) {
        let digit = n % 10;
        rev = rev * 10 + digit;
        if (rev > 2147483647 || rev < -2147483648) {
            return 0;
        }
        n = parseInt(n / 10, 10);
    }

    return rev === temp;
};
