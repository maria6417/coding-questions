/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
//     const tracker = {};
//     for (let i = 0; i < strs.length; i++) {
//         const sorted = [...strs[i]].sort();
//         if (tracker[sorted]) {
//             tracker[sorted].push(strs[i]);
//         } else {
//             tracker[sorted] = [strs[i]];
//         }
//     }
//     const result = [];
//     for (let key in tracker) {
//         result.push(tracker[key]);
//     }
    
//     return result;
    
    // declare result object
    const tracker = {};
    // iterate through strs
    for (let i = 0; i < strs.length; i++) {
        const count = Array(26).fill(0);
        for (let j = 0; j < strs[i].length; j++) {
            count[strs[i].charCodeAt(j) - 'a'.charCodeAt(0)]++;
        }
        tracker[count] ? tracker[count].push(strs[i]) : tracker[count] = [strs[i]];
    }
    
    const result = [];
    for (let key in tracker) {
        result.push(tracker[key]);
    }
    
    return result;
        // declare count array (with default 0 on 0 ~ 25)
        // iterate through strs[i] letters
            // set ascii - ascii of a index to + 1
        // after iteration, set count array as key, and append strs[i] to value array (if exists) to result object
    // decalre result array
    // after iteration, iterate through result object
        // append each value array to result array
    // return array
    
};