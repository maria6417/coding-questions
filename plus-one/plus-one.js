/**
 * @param {number[]} digits
 * @return {number[]}
 */

// 9
// declare target value = targetIndex + 1
// declare target index = last index - 1
// while target value is more than 10 ...
// assign targetvalue's 1st digit to that index 0 to
// if target value is more than 10 and targetIndex < 0 ...
// unshift 1 to array
// otherwise
// redeclare targetValue with targetIndex
// decrement targetIndex


var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
            if (i === 0) {
                digits.unshift(1);
            }
        } else {
            digits[i] = digits[i] + 1;
            break;
        }
    }
    return digits;
};