/**
 * @param {number[]} digits
 * @return {number[]}
 */

// 9
// declare target value = targetIndex + 1
// target index = last index - 1
// while target value is more than 10 ...
// assign targetvalue's 1st digit to that index 0 to
// if target value is more than 10 and targetIndex < 0 ...
// unshift 1 to array
// otherwise
// redeclare targetValue with targetIndex
// decrement targetIndex


var plusOne = function(digits) {
    // iterate backwards
    // find the last non-9 number, and increment that
    // if end of iteration and not found a 9, then just add 1 to beginning of array
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] !== 9) {
            // increment
            digits[i] = digits[i] + 1;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
};