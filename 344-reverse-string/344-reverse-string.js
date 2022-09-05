/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// use 2 pointers
// one iterating from the beginning
// one iterating from back
// swap the letter
var reverseString = function(s) {
    let p1 = 0;
    let p2 = s.length - 1;
    while (p1 < p2) {
        const temp = s[p1];
        s[p1] = s[p2];
        s[p2] = temp;
        p1++;
        p2--;
    }
    return s;
};