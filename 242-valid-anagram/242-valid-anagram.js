/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    // strategy 1: keep track of characters using object
    const tracker = {};
    for (let i = 0; i < s.length; i++) {
        tracker[s[i]] = (tracker[s[i]] | 0) + 1;
    }
    for (let i = 0; i < t.length; i++) {
        if (!tracker[t[i]]) return false
        tracker[t[i]]--;
    }
    return true;
    
    // strategy 2: sort both strings & compare
    // s = [...s].sort().join('');
    // t = [...t].sort().join('');
    // if (s !== t) return false;
    // return true;

};