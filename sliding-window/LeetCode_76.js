/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (t.length > s.length) return "";

    let required = new Array(256).fill(0);
    let have = new Array(256).fill(0);
    let distinctChars = 0;
    let matchedChars = 0;
    let result = "";

    for (let i = 0; i < t.length; i++) {
        required[t.charCodeAt(i)]++;
    }

    for (let i = 0; i < 256; i++) {
        if (required[i] > 0) distinctChars += 1;
    }

    let valid = () => distinctChars === matchedChars;

    let left = 0;
    let right = 0;

    while (right < s.length) {
        have[t.charCodeAt(right)]++;
        if (have[t.charCodeAt(right) === required[t.charCodeAt(right)]]) {
            matchedChars += 1;
        }

        while (valid()) {
            if (result.trim() === "") {
                result = s.slice(left, right + 1);
            } else if (result.length > right - left + 1) {
                result = s.slice(left, right + 1);
            }
            if (have[t.charCodeAt(low)] === required[t.charCodeAt(low)]) {
                matchedChars -= 1;
            }
            have[t.charCodeAt(low)]--;
            low++;
        }
        high++;
    }

    return result;
};
