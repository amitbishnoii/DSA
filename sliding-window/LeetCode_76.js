/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (t.length > s.length) return "";

    let charWeRequire = new Array(255).fill(0); // chars in string 't'
    let charWeHave = new Array(255).fill(0); // chars in string 's'
    let result = "";

    for (let i = 0; i < t.length; i++) {
        charWeRequire[t.charCodeAt(i)]++;
    }

    let valid = () => {
        for (let x = 0; x < 256; x++) {
            if (charWeRequire[x] > 0) {
                if (charWeHave[x] >= charWeRequire[x]) {
                    continue;
                } else {
                    return false;
                }
            } else {
                continue;
            }
        }
        return true;
    };

    let high = 0;
    let low = 0;

    while (high < s.length) {
        charWeHave[s.charCodeAt(high)]++;
        while (valid()) {
            let tempStr = s.slice(low, high + 1);
            if (result.trim() === "") {
                result = tempStr;
            } else if (tempStr.length < result.length) {
                result = tempStr;
            }
            charWeHave[s.charCodeAt(low)]--;
            low++;
        }
        high++;
    }

    return result;
};
