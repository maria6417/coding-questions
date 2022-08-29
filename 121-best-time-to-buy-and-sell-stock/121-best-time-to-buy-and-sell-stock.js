/**
 * @param {number[]} prices
 * @return {number}
 */

// through each iteration, keep track of the current min price
// and for each element, check if that current min price & current price is max profit value,
// update max accordingly
// after iteration return max
var maxProfit = function(prices) {
    let max = 0;
    let currentMin = Infinity;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < currentMin) currentMin = prices[i];
        max = Math.max(max, prices[i] - currentMin);
    }
    return max;
};