/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;
    let freq = new Array(26).fill(0);
    let tempFreq = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        freq[s1.charCodeAt(i) - 97]++;
        tempFreq[s2.charCodeAt(i) - 97]++;
    }

    let matches = () => {
        for (let i = 0; i < 26; i++) {
            if (freq[i] !== tempFreq[i]) return false;
        }
        return true;
    };

    if (matches()) return true;
    let left = 0;

    for (let ptr = s1.length; ptr < s2.length; ptr++) {
        tempFreq[s2.charCodeAt(ptr) - 97]++;
        tempFreq[s2.charCodeAt(left) - 97]--;
        left++;

        if (matches()) return true;
    }

    return false;
};
