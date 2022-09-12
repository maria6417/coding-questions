/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // convert s to include alphanumeric letters
    // using ascii?
    s = s.toLowerCase().replace(/[^a-z\d]/g, '');
    
    // if string length is less than 2 return true
    if (s.length <= 1) return true;
    // define starting pointer & ending pointer
    let p1 = 0;
    let p2 = s.length - 1;
    
    while (p1 < p2) {
        if (s[p1++] !== s[p2--]) return false;
    }
    
    return true;
    // iterate through new s while starting pointer is smaller than ending pointer
    // check that starting pointer letter is same as ending, if not return false
    // increment starting, decrement ending pointer
    
    // if iteration ends, return true
};