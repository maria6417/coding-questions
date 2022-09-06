/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
    const tracker = {};
    for (let i = 0; i < s.length; i++) {
        tracker[s[i]] = tracker[s[i]] ? tracker[s[i]] + 1 : 1;
    }
    
    for (let i = 0; i < s.length; i++) {
        if (tracker[s[i]] === 1) return i;
    }
    
    return -1
};