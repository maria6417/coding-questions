/**
 * @param {number[]} nums
 * @return {number}
 */

// multiple pointer solution / sliding window
// starting pointer & end pointer should always be a positive number
// it'll initially start at index 0
// set as max
// if element is negative, increment starting pointer & end
// once start is positive, increment end pointer
// if end pointer is negative,
var maxSubArray = function(nums) {
    if (nums.length === 0) return 0;
    // currentSum 
    let currentSum = 0;
    let max = -Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        max = Math.max(max, currentSum);
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    
    // max
    return max;
    
};