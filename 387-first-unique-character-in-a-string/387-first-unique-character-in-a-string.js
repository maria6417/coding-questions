/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
    const tracker = {};
    for (let i = 0; i < s.length; i++) {
        tracker[s[i]] = tracker[s[i]] ? [2, i] : [1, i];
    }
    let minIndex = Infinity;
    for (let key in tracker) {
        if (tracker[key][0] === 1) {
            minIndex = Math.min(minIndex, tracker[key][1]);
        }
    }
    
    return minIndex === Infinity ? -1 : minIndex;
};