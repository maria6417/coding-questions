/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) return s.length;
    // declare 2 pointer, start and end
    let start = 0, end = 0;
    // start & end both start from 0
    // declare object to keep track of found letter and its index
    const tracker = {};
    // declare max variable
    let max = 0;
    // while end is smaller than length of s
    while (end < s.length) {
        if (tracker[s[end]] !== undefined && tracker[s[end]] >= start) {
            max = Math.max(max, end - start);
            start = tracker[s[end]] + 1;
        }
        tracker[s[end]] = end;
        end++;
    }
    
    max = Math.max(max, end - start);
    
    // start = 2
    // end = 3
    // max = 2
    // {a: 0, b: 2}

        // if letter is found in object
            // set max to either current max or end - start index
            // set start to its found index + 1
        // set object letter's value to current index (end)
        // increment end index
    
    // return max
    return max;
};