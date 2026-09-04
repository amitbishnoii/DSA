/**https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */

function check(str, ind1, ind2) {
    return str.charAt(ind1) === str.charAt(ind2);
}

function recursivePalindrome(str, i, j) {
    if (i >= j) return true;
    if (check(str, i, j)) {
        return recursivePalindrome(str, i + 1, j - 1);
    } else {
        return false;
    }
}

var isPalindrome = function (s) {
    if (s.trim() === "") {
        return true;
    }
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    return recursivePalindrome(s, 0, s.length - 1);
};
