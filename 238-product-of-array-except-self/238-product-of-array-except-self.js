/**
 * @param {number[]} nums
 * @return {number[]}
 */


var productExceptSelf = function(nums) {
    const result = [1];
    let temp = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        // multiply nums[i] to temp & assign to index i+1
        temp *= nums[i];
        result[i + 1] = temp;
    }
    temp = 1;
    for (let i = nums.length - 1; i > 0; i--) {
        // multiply nums[i] to temp & assign to index i - 1
        temp *= nums[i];
        result[i - 1] *= temp;
    }
    return result;
};