/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const tracker = {};
    for (let i = 0; i < strs.length; i++) {
        const sorted = [...strs[i]].sort();
        if (tracker[sorted]) {
            tracker[sorted].push(strs[i]);
        } else {
            tracker[sorted] = [strs[i]];
        }
    }
    const result = [];
    for (let key in tracker) {
        result.push(tracker[key]);
    }
    
    return result;
};