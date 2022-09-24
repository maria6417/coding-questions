/**
 * @param {number[]} prices
 * @return {number}
 */

// iterate through nums
// two pointer buy and sell
// keep track of max profit
// buy starts with 0, sell = buy + 1
// while buy is smaller than sell, increment buy
// while sell is smaller than nums length
// check if buy is smaller than nums, if so calculate profit and update max
// if buy is bigger, set buy to current sell and reset sell as well
var maxProfit = function(prices) {
   let buy = 0; //1
    let max = 0;
    while (prices[buy] > prices[buy + 1]) {
        buy++;
    }
    let sell = buy + 1; //2
    while (sell < prices.length) {
        if (prices[buy] <= prices[sell]) {
            max = Math.max(prices[sell] - prices[buy], max);
            sell++;
        } else {
            buy = sell;
            sell = buy + 1;
        }
    }
    return max;
};