/**
 * @param {number[]} prices
 * @return {number}
 */


// for each element in prices,
// call helper function / inner function
// that....
// check each element in the array if bigger than first element
// if bigger, then as result, add difference of two + recursive call of remainding array
var maxProfit = function(prices) {
    let total = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) total += prices[i] - prices[i - 1];
    }
    return total
};