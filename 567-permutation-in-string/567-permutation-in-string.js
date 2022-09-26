/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const count = {};
    for (let i = 0; i < s1.length; i++) {
        count[s1[i]] = (count[s1[i]] || 0) + 1;
    }
    
    for (let l = 0; l < s2.length; l++) {
        if (count[s2[l]] === undefined) continue;
        // copy object
        const copyCount = Object.assign({}, count);
        copyCount[s2[l]]--;
        let r = l + 1;
        while((r - l) < s1.length) {
            // check if same, if not break
            if (copyCount[s2[r]]) {
                copyCount[s2[r]]--;
                r++;
            } else {
                r = -1;
                break;
            }
        }
        if (r > 0) return true;
    }
    return false;
};