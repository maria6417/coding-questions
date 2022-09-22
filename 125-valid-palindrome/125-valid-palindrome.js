/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // replace non-alphanumeric chars with empty space
    s = s.replace(/[^\da-z]/gi, '').toLowerCase();
    if (s.length === 0) return true;
    // convert s to lowercase
    // start & end pointers
    let start = 0;
    let end = s.length - 1;
    // while start is smaller than end
    while(start < end) {
        if (s[start++] !== s[end--]) return false;
    }
    // compare each chars, return false if mismatch
    // increment start, decrement end
    return true;
};