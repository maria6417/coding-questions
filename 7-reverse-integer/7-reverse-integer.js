/**
 * @param {number} x
 * @return {number}
 */
// convert to string
// check if negative, keep track negative
// reverse
var reverse = function(number) {
    
    // let numArr = Array.from(number.toString());
    // let isNegative = numArr[0] === '-' ? numArr.splice(0, 1) : '';
    // let reversed = Number(isNegative + numArr.reverse().join(''));
    // if (reversed >= 2**31 || reversed <= -(2**31) + 1) return 0;
    // return reversed
    
    const numArr = Array.from(number.toString());
    // []
    let reversed = [];
    
    // 3
    while (numArr.length) {
        reversed.push(numArr.pop());
        // reversed = [3,2,1]
    }
    
    if (reversed[reversed.length - 1] === '-') {
        reversed.pop();
        reversed = '-' + reversed.join('');
    } else {
        // 321
        reversed = reversed.join('');
    }

    if (reversed >= 2**31 || reversed <= -(2**31) + 1) return 0;
    
    return reversed;
};