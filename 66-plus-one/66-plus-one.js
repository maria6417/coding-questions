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
    let targetIndex = digits.length - 1;
    let targetValue = ++digits[targetIndex];
    while (targetValue > 9) {
        digits[targetIndex] = 0;
        if (targetIndex === 0) {
            digits.unshift(1);
            targetValue = 1;
        } else {
            targetIndex--;
            targetValue = ++digits[targetIndex];
        }
    }
    return digits;
};