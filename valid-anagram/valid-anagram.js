/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// iterate through s, store in object frequency count
// iterate through t, check if value in freqcount object is truthy
// return false if falsey
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    const freqCount = {};
    for (let i = 0; i < s.length; i++) {
        freqCount[s[i]] = freqCount[s[i]] ? freqCount[s[i]] + 1 : 1
    }
    for (let i = 0; i < t.length; i++) {
        if (!freqCount[t[i]]) return false;
        freqCount[t[i]] = freqCount[t[i]] - 1;
    }
    return true;
};