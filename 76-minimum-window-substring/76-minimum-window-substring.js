/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length < t.length) return '';
    
    let min;
    const tCount = {};
    for (let i = 0; i < t.length; i++) {
        tCount[t[i]] = (tCount[t[i]] | 0) + 1;
    }
    
    const sCount = {};
    let matches = 0;
    let r = 0;
    for (let l = 0; l < s.length; l++) {
        while (r < s.length && matches !== Object.keys(tCount).length) {
            sCount[s[r]] = (sCount[s[r]] || 0) + 1;
            if (tCount[s[r]] === sCount[s[r]]) matches++;
            r++;
        }
        
        // check if freq is same, if same, increment matches
        if (matches === Object.keys(tCount).length) {
            // valid window found
            if (!min || min.length > (r - l)) {
                min = s.slice(l, r);
            }
        }
        
        // decrement l from sCount
        sCount[s[l]]--;
        if (sCount[s[l]] < tCount[s[l]]) matches--;
    }
    return min ? min : '';
};

minWindow("aa",
"aa");
